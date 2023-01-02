import React from 'react';
import styled from 'styled-components';
import MainSlider from '@components/home/MainSlider';
import Proverb from '@components/common/Proverb';
import BookStorySlider from '@components/home/BookStorySlider';

export default function Home() {
  return (
    <S.Home>
      <MainSlider />
      <Proverb />
      <BookStorySlider />
      {/* <MainSlider /> */}
      {/* <MainSlider /> */}
    </S.Home>
  );
}

const S = {
  Home: styled.div`
    height: 100%;
  `,
};
