import React from 'react';
import styled from 'styled-components';
import Proverb from '@components/common/Proverb';
import Panel from '@components/common/Panel';

interface IBookStory {}

export default function BookStory({}: IBookStory) {
  return (
    <S.BookStory>
      <Panel>
        <Proverb />
      </Panel>
    </S.BookStory>
  );
}

const S = {
  BookStory: styled.div``,
};
