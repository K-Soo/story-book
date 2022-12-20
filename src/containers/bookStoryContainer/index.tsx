import React from 'react';
import styled from 'styled-components';
import BookStory from '@components/bookStory';
import Search from '@components/search';
import { useRouter } from 'next/router';
import { Get } from '@api';
import { useAppDispatch, useAppSelector } from '@store';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import InfiniteScroll from 'react-infinite-scroller';
import PostCard from '@components/common/PostCard';
import { IPostCardTypes } from '@types';
import FilterBox from '@components/common/FilterBox';
import Skeleton from '@components/common/Skeleton';
import { queryKeys } from '@constants';

interface IBookStoryContainer {}

export default function BookStoryContainer({}: IBookStoryContainer) {
  const router = useRouter();

  const requestData = {
    url: Get.getBookStoryList,
    queryKey: [queryKeys.BOOK_STORY_LIST],
    option: {},
    type: 'DEFAULT',
  };

  const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage, isError } =
    useInfiniteScroll(requestData);
  console.log('북스토리 리스트  API : ', data);

  return (
    <>
      <FilterBox />
      {isLoading && <Skeleton.list />}
      {/* TODO : 에러처리 */}
      {isError && <div>error</div>}
      {isSuccess && data && (
        <BookStory>
          <InfiniteScroll
            loadMore={() => {
              fetchNextPage();
            }}
            hasMore={hasNextPage}
            threshold={250}
          >
            {data.pages.map(pageData => {
              return pageData.items.map((item: IPostCardTypes) => <PostCard key={item.createdAt} item={item} />);
            })}
          </InfiniteScroll>
        </BookStory>
      )}
    </>
  );
}
