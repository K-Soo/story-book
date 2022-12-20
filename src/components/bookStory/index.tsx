import React from 'react';
import styled from 'styled-components';
import Proverb from '@components/common/Proverb';
import Panel from '@components/common/Panel';

interface IBookStory {
  children: React.ReactNode;
}

export default function BookStory({ children }: IBookStory) {
  return <S.BookStory>{children}</S.BookStory>;
}

const S = {
  BookStory: styled.div`
    padding: 10px 10px 0 10px;
  `,
};
