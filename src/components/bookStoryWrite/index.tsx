import React from 'react';
import { useAppDispatch } from '@store';
import { setVisibilityFooter } from '@slice/layoutSlice';
import styled from 'styled-components';
import WriteGuide from '@components/bookStoryWrite/WriteGuide';
import AddBook from '@components/bookStoryWrite/AddBook';
import HorizontalLine from '@components/common/HorizontalLine';
import WriteTitleBox from '@components/bookStoryWrite/WriteTitleBox';
import WriteBody from '@components/bookStoryWrite/WriteBody';
import SearchBooks from '@components/bookStoryWrite/SearchBooks';
import Button from '@components/common/Button';

interface IBookStoryWrite {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onClickSearchBook: () => void;
  step: number;
}

export default function BookStoryWrite({ onSubmit, onClickSearchBook, step }: IBookStoryWrite) {
  return (
    <S.BookStoryWrite>
      {step === 0 && (
        <form onSubmit={onSubmit}>
          <WriteGuide />
          <HorizontalLine height='1px' />
          <AddBook onClickSearchBook={onClickSearchBook} />
          <HorizontalLine height='1px' />
          <WriteTitleBox />
          <HorizontalLine height='1px' />
          <WriteBody />
          <Button type='submit' label='출간하기' margin='30px 0' />
        </form>
      )}
      {step === 1 && <SearchBooks />}
    </S.BookStoryWrite>
  );
}

const S = {
  BookStoryWrite: styled.div``,
};
