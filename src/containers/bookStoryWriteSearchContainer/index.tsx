import React from 'react';
import { Get } from '@api';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@store';
import { BookDetailInfo } from '@types';
import { setBookDetailInfo, setOpenBookSearchForm } from '@slice/bookStoryPostSlice';
import Skeleton from '@components/common/Skeleton';
import SearchInput from '@components/common/SearchInput';
import InfiniteScroll from 'react-infinite-scroller';
import BookCardOneLine from '@components/common/BookCardOneLine';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import BookStoryWriteSearch from '@components/bookStoryWriteSearch';
import EmptyText from '@components/common/EmptyText';

export default function BookStoryWriteSearchContainer() {
  const [text, setText] = React.useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const requestData = {
    url: Get.getSearchKeyword,
    requestBody: { keyword: router.query.keyword as string },
    queryKey: [router.query.keyword as string],
    option: {
      enabled: !!router.query.keyword,
    },
  };

  const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage, isError, refetch } =
    useInfiniteScroll(requestData);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') return;
    router.replace({ pathname: '/book-story/write/search', query: { keyword: text } });
  };

  // prettier-ignore
  const handleClickTargetBook = React.useCallback((data: BookDetailInfo) => {
    dispatch(setBookDetailInfo(data));
    router.back();
    // dispatch(setOpenBookSearchForm(false));
  },[dispatch, router]);

  console.log('검색결과 API : ', data);

  return (
    <BookStoryWriteSearch>
      <form onSubmit={handleSubmitForm}>
        <SearchInput value={text} maxLength={30} onChange={e => setText(e.target.value)} disabled={isLoading} />
      </form>
      {isLoading && <Skeleton.oneLineList />}
      {isSuccess && data?.pages[0]?.total === 0 && <EmptyText text='검색 결과가 없습니다' />}
      {isSuccess && data && (
        <InfiniteScroll
          loadMore={() => {
            fetchNextPage();
          }}
          hasMore={hasNextPage}
          threshold={200}
        >
          {data.pages.map(pageData => {
            return pageData.items.map((item: BookDetailInfo) => (
              <BookCardOneLine key={item.title} data={item} handleClickTargetBook={handleClickTargetBook} />
            ));
          })}
        </InfiniteScroll>
      )}
    </BookStoryWriteSearch>
  );
}
