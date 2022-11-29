import React from 'react';
import Search from '@components/search';
import { useRouter } from 'next/router';
import { Get } from '@api';
import { useAppDispatch, useAppSelector } from '@store';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import InfiniteScroll from 'react-infinite-scroller';
import BookCard from '@components/common/BookCard';

export default function SearchContainer() {
  const router = useRouter();

  const requestData = {
    url: Get.getSearchKeyword,
    requestBody: { keyword: router.query.keyword as any },
    queryKey: [router.query.keyword as string],
    option: {
      enabled: !!router.query.keyword,
    },
  };

  const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage, isError, refetch } = useInfiniteScroll(requestData);

  return (
    <Search>
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
