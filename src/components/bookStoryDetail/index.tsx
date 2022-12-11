import React from 'react';
import styled from 'styled-components';
import HorizontalLine from '@components/common/HorizontalLine';
import WriteTitleBox from '@components/bookStoryWrite/WriteTitleBox';
import WriteBody from '@components/bookStoryWrite/WriteBody';
import BookDetailView from '@components/bookStoryDetail/BookDetailView';
import Button from '@components/common/Button';
import PostConfig from '@components/bookStoryDetail/PostConfig';
import ProfileSummary from '@components/bookStoryDetail/ProfileSummary';
import { IPostCardTypes, TDocumentId, BookDetailInfo } from '@types';
import { useSession } from 'next-auth/react';
import { TSessionTypes } from 'pages/api/auth/[...nextauth]';
import { useAppDispatch, useAppSelector } from '@store';
import { setReadOnly } from '@slice/bookStoryPostSlice';
import BottomFixedBox from '@components/common/BottomFixedBox';
import AddBook from '@components/bookStoryWrite/AddBook';
import BookInfoView from '@components/common/BookInfoView';
import bookStoryDetailComment from '@components/bookStoryDetailComment';
import BookStoryDetailCommentContainer from '@containers/bookStoryDetailCommentContainer';

interface IResponseData extends IPostCardTypes {
  bookInfo: BookDetailInfo;
}
interface IBookStoryDetail {
  data: IResponseData;
}

export default function BookStoryDetail({ data }: IBookStoryDetail) {
  const { data: session }: { data: TSessionTypes | null } = useSession();
  const getSession = session?.user?.id as unknown as TDocumentId;
  const dispatch = useAppDispatch();
  const { isReadOnly } = useAppSelector(state => state.bookStoryPost);

  return (
    <S.BookStoryDetail>
      <WriteTitleBox />
      {getSession && getSession === data?.author._id && <PostConfig />}
      <ProfileSummary summaryInfo={{ createdAt: data.createdAt, name: data.author.name }} />
      {isReadOnly && <BookDetailView bookInfo={data.bookInfo} />}
      <WriteBody />
      {isReadOnly && (
        <>
          <HorizontalLine />
          <BookStoryDetailCommentContainer />
        </>
      )}
      {!isReadOnly && (
        <BottomFixedBox>
          <Button label='수정 완료' margin='0 0 10px 0' />
          <Button label='수정 취소' onClick={() => dispatch(setReadOnly(true))} />
        </BottomFixedBox>
      )}
    </S.BookStoryDetail>
  );
}

const S = {
  BookStoryDetail: styled.section`
    background-color: #fff;
    border: 1px solid red;
  `,
};
