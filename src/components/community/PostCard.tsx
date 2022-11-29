import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function PostCard() {
  return (
    <S.PostCard>
      <div className='image-box'>
        <Image src='/images/logo/main_logo.png' height='150px' width='150px' alt='기본 이미지' />
      </div>
      <div className='desc-box'>
        <h1 className='desc-box__title'>타이틀</h1>
        <p className='desc-box__message'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur dolorem at voluptatum facere maxime autem, non consectetur, eum explicabo eos dicta assumenda corrupti placeat
          vitae a unde minima nostrum?
        </p>
        <div>
          <span>20202 11 12</span>
          <span>12개 댓글</span>
        </div>
      </div>
      <div className='user-info'>글 정보 섹션</div>
    </S.PostCard>
  );
}

const S = {
  PostCard: styled.article`
    background-color: ${props => props.theme.colors.white};
    border-radius: 5px;
    /* height: 250px; */
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .image-box {
      /* flex-basis: 40%; */
    }
    .desc-box {
      /* flex-basis: 40%; */
      padding: 10px;
      &__title {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 15px;
      }
    }
    .user-info {
      height: 35px;
      /* flex-basis: 20%; */
      padding: 0 10px;
      border-top: 1px solid #aaa;
    }
  `,
};
