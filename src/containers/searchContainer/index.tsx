import React from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@store';
import { getSearchState, setKeyword, setToggleSearchForm } from '@slice/searchSlice';
import { Get } from '@api';
import InfiniteScroll from 'react-infinite-scroller';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import BookCard from '@components/common/BookCard';
import SearchInput from '@components/common/SearchInput';
import RecentSearch from '@components/searchForm/RecentSearch';
import Search from '@components/search';
import CardSkeleton from '@components/common/Skeleton';

export default function SearchContainer() {
  const router = useRouter();
  const { keyword } = useAppSelector(getSearchState);
  const dispatch = useAppDispatch();

  const requestData = {
    url: Get.getSearchKeyword,
    requestBody: { keyword: router.query.keyword as any },
    queryKey: [router.query.keyword as string],
    option: {
      enabled: !!router.query.keyword,
    },
  };

  const handleSubmitForm = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (keyword.trim() === '') return;
      dispatch(setToggleSearchForm(false));
      router.push(`/search?keyword=${keyword}`);
    },
    [dispatch, keyword, router]
  );

  const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage, isError, refetch } =
    useInfiniteScroll(requestData);

  return (
    <Search>
      <form onSubmit={handleSubmitForm}>
        <SearchInput />
      </form>
      <RecentSearch />
      {isLoading && <CardSkeleton />}

      {isSuccess && (
        <InfiniteScroll threshold={500} loadMore={fetchNextPage as any} hasMore={hasNextPage}>
          {data &&
            data.pages.map(pageData => {
              return pageData.items.map((element: any, index: number) => {
                return <BookCard key={index} item={element} />;
              });
            })}
        </InfiniteScroll>
      )}
    </Search>
  );
}
