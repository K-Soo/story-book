import React from 'react';
import styled from 'styled-components';
import WriteGuide from '@components/bookStoryWrite/WriteGuide';
import AddBook from '@components/bookStoryWrite/AddBook';
import HorizontalLine from '@components/common/HorizontalLine';
import WriteTitleBox from '@components/bookStoryWrite/WriteTitleBox';
import WriteBody from '@components/bookStoryWrite/WriteBody';
import SearchBooks from '@components/bookStoryWrite/SearchBooks';
import Button from '@components/common/Button';
import PostConfig from '@components/bookStoryDetail/PostConfig';
import ProfileSummary from '@components/bookStoryDetail/ProfileSummary';
import { IPostCardTypes } from '@types';

interface IBookStoryDetail {
  data: IPostCardTypes;
}

export default function BookStoryDetail({ data }: IBookStoryDetail) {
  return (
    <S.BookStoryDetail>
      <WriteTitleBox readonly />
      <PostConfig />
      <ProfileSummary summaryInfo={{ createdAt: data.createdAt, name: data.author.name }} />
      <WriteBody readonly />
    </S.BookStoryDetail>
  );
}

const S = {
  BookStoryDetail: styled.div``,
};
