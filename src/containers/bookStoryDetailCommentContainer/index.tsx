import React from 'react';
import BookStoryDetailComment from '@components/bookStoryDetailComment';
import CommentWrite from '@components/bookStoryDetailComment/CommentWrite';
import CommentItem from '@components/bookStoryDetailComment/CommentItem';
import { Post, Get } from '@api';
import { TDocumentId } from '@types';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { queryKeys } from '@constants';
import useLoading from '@hooks/useLoading';
import InfiniteScroll from 'react-infinite-scroller';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface IBookStoryDetailCommentContainer {
  postId: TDocumentId;
}

export default function BookStoryDetailCommentContainer({ postId }: IBookStoryDetailCommentContainer) {
  const requestData = {
    url: Get.getBookStoryCommentList,
    queryKey: [queryKeys.BOOK_STORY_DETAIL_COMMENT],
    option: {},
    requestBody: { postId },
    type: 'DEFAULT',
  };

  const { data, isLoading, isFetching, isSuccess, hasNextPage, fetchNextPage, isError, refetch } =
    useInfiniteScroll(requestData);
  console.log('댓글 리스트  API : ', data);

  const fetchCreateComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await Post.createCommentBookStory({ content: '@@@@@@@@@@', postId });
      console.log('댓글등록 API : ', response);
      if (response.status === 200) {
        toast.success('댓글 등록완료!');
        refetch();
      }
    } catch (error) {
      console.log('error: ', error);
      toast.error('잠시 후 다시시도해주세요');
    } finally {
    }
  };

  return (
    <>
      <BookStoryDetailComment>
        <CommentWrite fetchCreateComment={fetchCreateComment} />
        {isError && <div>error</div>}
        {isLoading && <div>loading</div>}
        {isSuccess && data && (
          <>
            <InfiniteScroll
              loadMore={() => {
                fetchNextPage();
              }}
              hasMore={hasNextPage}
              threshold={250}
            >
              {data.pages.map(pageData => {
                if (pageData.pageInfo.totalDoc === 0) {
                  <div>댓글이없다</div>;
                }
                return pageData.items.map((item: any, index: number) => (
                  <CommentItem key={item.createdAt} item={item} />
                ));
              })}
            </InfiniteScroll>
          </>
        )}
      </BookStoryDetailComment>
    </>
  );
}
