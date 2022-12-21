import React from 'react';
import BookStoryDetailComment from '@components/bookStoryDetailComment';
import CommentWrite from '@components/bookStoryDetailComment/CommentWrite';
import CommentItem from '@components/bookStoryDetailComment/CommentItem';
import { Post, Get } from '@api';
import { TDocumentId } from '@types';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { queryKeys } from '@constants';
import InfiniteScroll from 'react-infinite-scroller';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextArea from '@components/common/TextArea';
import styled from 'styled-components';
import EmptyText from '@components/common/EmptyText';
import Spinners from '@components/common/Spinners';
import useLoading from '../../hooks/useLoading';

interface IBookStoryDetailCommentContainer {
  postId: TDocumentId;
}

export default function BookStoryDetailCommentContainer({ postId }: IBookStoryDetailCommentContainer) {
  const [text, setText] = React.useState('');
  const [loading, setLoading] = useLoading(true);

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
    setLoading(true);
    try {
      const response = await Post.createCommentBookStory({ content: text, postId });
      console.log('댓글등록 API : ', response);
      if (response.status === 200) {
        toast.success('댓글 등록완료!');
        setText('');
        refetch();
      }
    } catch (error) {
      console.log('error: ', error);
      toast.error('잠시 후 다시시도해주세요');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BookStoryDetailComment>
        <CommentWrite fetchCreateComment={fetchCreateComment}>
          {loading && <Spinners position='absolute' size={8} />}
          <TextArea readOnly={false} onChange={e => setText(e.target.value)} value={text} />
        </CommentWrite>
        {isError && <div>error</div>}
        {isLoading && <div>loading</div>}
        {isSuccess && data && (
          <>
            <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage} threshold={250}>
              {data.pages.map(pageData => {
                if (pageData.pageInfo.totalDoc === 0) {
                  return <EmptyText key={pageData.pageInfo.totalDoc} text='등록된 댓글이없습니다.' />;
                }
                return pageData.items.map((item: any) => <CommentItem key={item.createdAt} item={item} />);
              })}
            </InfiniteScroll>
          </>
        )}
      </BookStoryDetailComment>
    </>
  );
}

const Test = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
`;
