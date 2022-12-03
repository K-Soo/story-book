import React from 'react';
import styled from 'styled-components';
import WriteGuide from '@components/bookStoryWrite/WriteGuide';
import AddBook from '@components/bookStoryWrite/AddBook';
import HorizontalLine from '@components/common/HorizontalLine';
import WriteTitleBox from '@components/bookStoryWrite/WriteTitleBox';
import WriteBody from '@components/bookStoryWrite/WriteBody';
import SearchBooks from '@components/bookStoryWrite/SearchBooks';
import Button from '@components/common/Button';

interface IBookStoryDetail {}

export default function BookStoryDetail({}: IBookStoryDetail) {
  return (
    <S.BookStoryDetail>
      <HorizontalLine height='1px' />
      <WriteTitleBox />
      <HorizontalLine height='1px' />
      <WriteBody />
    </S.BookStoryDetail>
  );
}

const S = {
  BookStoryDetail: styled.div``,
};
