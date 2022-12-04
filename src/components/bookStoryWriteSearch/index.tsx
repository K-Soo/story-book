import React from 'react';
import styled from 'styled-components';

interface IBookStoryWriteSearch {
  children: React.ReactNode;
}

export default function BookStoryWriteSearch({ children }: IBookStoryWriteSearch) {
  return <S.bookStoryWriteSearch>{children}</S.bookStoryWriteSearch>;
}

const S = {
  bookStoryWriteSearch: styled.div`
    min-height: 500px;
    padding: 0 10px;
  `,
};
