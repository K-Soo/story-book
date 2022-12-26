import React from 'react';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { IPostCardTypes } from '@types';
import { Get } from '@api';
import { queryKeys } from '@constants';
import BookStory from '@components/bookStory';
import InfiniteScroll from 'react-infinite-scroller';
import PostCard from '@components/common/PostCard';
import FilterBox from '@components/common/FilterBox';
import Skeleton from '@components/common/Skeleton';

export type TSortTypes = 'DESC' | 'ASC';
export type TDisplayTypes = 'VERTICAL' | 'FLEX';

export default function BookStoryContainer() {
  const [sort, setSort] = React.useState<TSortTypes>('DESC');
  const [displayType, setDisplayType] = React.useState<TDisplayTypes>('VERTICAL');

  const requestData = {
    url: Get.getBookStoryList,
    queryKey: [queryKeys.BOOK_STORY_LIST, sort],
    option: {},
    requestBody: { sort },
    type: 'DEFAULT',
  };

  const handleChangeSort = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as TSortTypes);
  }, []);

  const handleChangeDisplay = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayType(prev => {
      if (prev === 'VERTICAL') {
        return 'FLEX';
      }
      return 'VERTICAL';
    });
  }, []);

  const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage, isError } =
    useInfiniteScroll(requestData);
  console.log('북스토리 리스트  API : ', data);

  return (
    <>
      <FilterBox
        displayType={displayType}
        handleChangeSort={handleChangeSort}
        handleChangeDisplay={handleChangeDisplay}
      />
      {isLoading && <Skeleton.list />}
      {/* TODO : 에러처리 */}
      {isError && <div>error</div>}
      {isSuccess && data && (
        <BookStory displayType={displayType}>
          <InfiniteScroll
            className='scroll-container'
            loadMore={() => {
              fetchNextPage();
            }}
            hasMore={hasNextPage}
            threshold={250}
          >
            {data.pages.map(pageData => {
              return pageData.items.map((item: IPostCardTypes) => (
                <PostCard key={item.createdAt} item={item} displayType={displayType} />
              ));
            })}
          </InfiniteScroll>
        </BookStory>
      )}
    </>
  );
}
