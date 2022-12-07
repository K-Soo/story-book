import React from 'react';
import styled from 'styled-components';
import WriteGuide from '@components/bookStoryWrite/WriteGuide';
import AddBook from '@components/bookStoryWrite/AddBook';
import HorizontalLine from '@components/common/HorizontalLine';
import WriteTitleBox from '@components/bookStoryWrite/WriteTitleBox';
import WriteBody from '@components/bookStoryWrite/WriteBody';
import Button from '@components/common/Button';
import PostConfig from '@components/bookStoryDetail/PostConfig';
import ProfileSummary from '@components/bookStoryDetail/ProfileSummary';
import { IPostCardTypes } from '@types';
import { useSession } from 'next-auth/react';

export default function BookStoryDetail() {
  const { data: session, status } = useSession();

  return (
    <S.BookStoryDetail>
      <WriteTitleBox readonly />
      {session && <PostConfig />}
      <ProfileSummary />
      <WriteBody readonly />
    </S.BookStoryDetail>
  );
}

const S = {
  BookStoryDetail: styled.section`
    background-color: #fff;
  `,
};
