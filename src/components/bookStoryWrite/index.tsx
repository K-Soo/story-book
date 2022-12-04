import React from 'react';
import styled from 'styled-components';
import WriteGuide from '@components/bookStoryWrite/WriteGuide';
import AddBook from '@components/bookStoryWrite/AddBook';
import HorizontalLine from '@components/common/HorizontalLine';
import WriteTitleBox from '@components/bookStoryWrite/WriteTitleBox';
import WriteBody from '@components/bookStoryWrite/WriteBody';
import Button from '@components/common/Button';

interface IBookStoryWrite {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onClickSearchBook: () => void;
}

export default function BookStoryWrite({ onSubmit, onClickSearchBook }: IBookStoryWrite) {
  return (
    <S.BookStoryWrite>
      <form onSubmit={onSubmit}>
        <WriteGuide />
        <HorizontalLine height='1px' />
        <AddBook onClickSearchBook={onClickSearchBook} />
        <HorizontalLine height='2px' />
        <WriteTitleBox />
        <HorizontalLine height='1px' />
        <WriteBody />
        <WriteBody />
        <WriteBody />
        <Button type='submit' label='출간하기' margin='30px 0' />
      </form>
    </S.BookStoryWrite>
  );
}

const S = {
  BookStoryWrite: styled.section``,
};
