import React from 'react';
import styled, { css } from 'styled-components';
import Proverb from '@components/common/Proverb';
import Panel from '@components/common/Panel';
import { TDisplayTypes } from '@containers/bookStoryContainer';

interface IBookStory {
  children: React.ReactNode;
  displayType: TDisplayTypes;
}

export default function BookStory({ displayType, children }: IBookStory) {
  return <S.BookStory displayType={displayType}>{children}</S.BookStory>;
}

const S = {
  BookStory: styled.div<{ displayType: TDisplayTypes }>`
    padding: 10px 10px 0 10px;
    .scroll-container {
      ${props =>
        props.displayType === 'FLEX' &&
        css`
          display: flex;
          flex-wrap: wrap;
          height: 100%;
        `}
    }
  `,
};
