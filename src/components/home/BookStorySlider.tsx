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
      <Slider {...settings} className='test'>
        <div className='item-card'>
          {/* <Image
            src='/images/main/book1.jpg'
            alt='best_pick4'
            layout='fill'
            objectFit='contain' // Scale your image down to fit into the container
          /> */}
          <h1>asdasd</h1>
        </div>
        <div className='item-card'>
          {/* <Image
            src='/images/main/book1.jpg'
            alt='best_pick4'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
          /> */}
        </div>
        <div className='item-card'>
          {/* <Image
            src='/images/main/book1.jpg'
            alt='best_pick4'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
          /> */}
        </div>
        <div className='item-card'>
          {/* <Image
            src='/images/main/book1.jpg'
            alt='best_pick4'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
          /> */}
          asd
        </div>
      </Slider>
    </S.BookStorySlider>
  );
}

const S = {
  BookStorySlider: styled.div`
    margin: 20px 0;
    border: 1px solid red;
    /* overflow: hidden; */
    font-size: 0;
    .top-layout {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      align-items: center;
    }
    .item-card {
      border: 1px solid red;
      /* position: relative !important; */
      width: 200px;
      height: 100px;
      font-size: 14px;
    }
    .test {
      border: 1px solid red;
    }
  `,
};
