import React from 'react';
import styled from 'styled-components';
import BookStory from '@components/bookStory';
import Search from '@components/search';
import { useRouter } from 'next/router';
import { Get } from '@api';
import { useAppDispatch, useAppSelector } from '@store';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import InfiniteScroll from 'react-infinite-scroller';
import BookCard from '@components/common/BookCard';

interface IBookStoryContainer {}

export default function BookStoryContainer({}: IBookStoryContainer) {
  const router = useRouter();

  const requestData = {
    url: Get.getBookStoryList,
    requestBody: { keyword: router.query.keyword as any },
    queryKey: [router.query.keyword as string],
    option: {
      enabled: !!router.query.keyword,
    },
  };

  // const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage, isError, refetch } = useInfiniteScroll(requestData);
  // console.log('북스토리 리스트  API : ', data);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await Get.getBookStoryList({ page: 1 });
        console.log('%cresponse: ', 'color:Red', response);
      } catch (error) {
        console.log('error: ', error);
      }
    })();
  }, []);

  return (
    <>
      <BookStory />
    </>
  );
}
