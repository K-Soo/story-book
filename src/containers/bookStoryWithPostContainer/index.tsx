import React from 'react';
import styled from 'styled-components';
import BookStoryWriteContainer from '@containers/bookStoryWriteContainer';
import BookStoryWriteSearchContainer from '@containers/bookStoryWriteSearchContainer';
import { useAppSelector } from '@store';

interface IBookStoryWithPostContainer {}

export default function BookStoryWithPostContainer({}: IBookStoryWithPostContainer) {
  const [step, setStep] = React.useState(0);
  const { isOpenSearchForm } = useAppSelector(state => state.bookStoryPost);

  return (
    <S.BookStoryWithPostContainer>
      {!isOpenSearchForm && <BookStoryWriteContainer />}
      {isOpenSearchForm && <BookStoryWriteSearchContainer />}
    </S.BookStoryWithPostContainer>
  );
}

const S = {
  BookStoryWithPostContainer: styled.div``,
};
