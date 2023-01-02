import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IMainSlider {}

export default function MainSlider({}: IMainSlider) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.MainSlider>
      <div>
        <Slider {...settings}>
          <div className='item-card'>
            <Image
              src='/images/main/ivana-cajina-asuyh-_ZX54-unsplash.jpg'
              alt='best_pick4'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='item-card'>
            <Image
              src='/images/main/book1.jpg'
              alt='best_pick4'
              layout='fill'
              objectFit='cover' // Scale your image down to fit into the container
            />
          </div>
        </Slider>
      </div>
    </S.MainSlider>
  );
}

const S = {
  MainSlider: styled.article`
    width: 100%;
    /* height: 300px; */
    font-size: 0;
    .item-card {
      position: relative;
      height: 200px;
      width: 100%;
      /* border: 3px solid red; */
    }
  `,
};
