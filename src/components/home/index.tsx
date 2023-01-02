import React from 'react';
import styled from 'styled-components';
import MainSlider from '@components/home/MainSlider';
import Proverb from '@components/common/Proverb';
import BookStorySlider from '@components/home/BookStorySlider';
import LoginQuestion from '@components/home/LoginQuestion';
import PopularityBook from '@components/home/PopularityBook';

export default function Home() {
  return (
    <S.Home>
      <MainSlider />
      <LoginQuestion />
      <Proverb />
      <PopularityBook />
      <BookStorySlider />
      {/* <MainSlider /> */}
      {/* <MainSlider /> */}
    </S.Home>
  );
}

const S = {
  Home: styled.div`
    height: 100%;
    background-color: #eff1f3;
  `,
};
