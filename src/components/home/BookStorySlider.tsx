import styled from 'styled-components';
import Slider from 'react-slick';
import Image from 'next/image';
import Continue from '@components/common/Continue';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface IBookStorySlider {}

export default function BookStorySlider({}: IBookStorySlider) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
    // centerMode: true,
  };

  return (
    <S.BookStorySlider>
      <div className='top-layout'>
        <h6>북 스토리</h6>
        <Continue href='/book-story' />
      </div>
      <Slider {...settings}>
        <div className='item-card'>
          <Image
            src='/images/main/book1.jpg'
            alt='best_pick4'
            layout='fill'
            objectFit='contain' // Scale your image down to fit into the container
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
        <div className='item-card'>
          <Image
            src='/images/main/book1.jpg'
            alt='best_pick4'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
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
    </S.BookStorySlider>
  );
}

const S = {
  BookStorySlider: styled.div`
    width: 500px;

    .top-layout {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .item-card {
      border: 1px solid red;
      position: relative;
      /* margin: 10px; */
      padding: 0 20px;
      width: 200px !important;
      height: 100px;
    }
  `,
};
