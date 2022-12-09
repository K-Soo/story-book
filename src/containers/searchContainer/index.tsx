import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import BookCard from '@components/common/BookCard';
import SearchInput from '@components/common/SearchInput';
import RecentSearch from '@components/searchForm/RecentSearch';
import Search from '@components/search';
import Skeleton from '@components/common/Skeleton';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@store';
import { getSearchState, setKeyword, setToggleSearchForm } from '@slice/searchSlice';
import { Get } from '@api';

export default function SearchContainer() {
  const router = useRouter();
  const { keyword } = useAppSelector(getSearchState);
  const dispatch = useAppDispatch();

  const requestData = {
    url: Get.getSearchKeyword,
    requestBody: { keyword: router.query.keyword as string },
    queryKey: [router.query.keyword as string],
    option: {
      enabled: !!router.query.keyword,
    },
  };

  //prettier-ignore
  const handleSubmitForm = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.trim() === '') return;
    dispatch(setToggleSearchForm(false));
    router.push(`/search?keyword=${keyword}`);
  },[dispatch, keyword, router]);

  const handleClickRecentKeyword = () => {};

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeyword(e.target.value));
  };

  // XXX : 추후 남은 기능 구현
  const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage, isError, refetch } =
    useInfiniteScroll(requestData);

  return (
    <Search>
      <form onSubmit={handleSubmitForm}>
        <SearchInput value={keyword} onChange={onChangeKeyword} />
      </form>
      <RecentSearch />
      {isLoading && <Skeleton.list />}

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
