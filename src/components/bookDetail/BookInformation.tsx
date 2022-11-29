import React from 'react';
import styled from 'styled-components';
import { IBookDetailInfo } from '@types';
import Image from 'next/image';
import Button from '@components/common/Button';

interface IBookInformation {
  data: IBookDetailInfo;
}

export default function BookInformation({ data }: IBookInformation) {
  return (
    <S.BookInformation>
      <div className='image-box'>
        <Image src={data.image} height={300} width={200} alt='책 상세 이미지' />
      </div>
      <div className='desc-box'>
        <ul className='desc-box__list'>
          <li className='desc-box__list--title'>{data.title}</li>
          <li className='desc-box__list--discount'>{data.discount}</li>
          <li className='desc-box__list--author'>{data.author}</li>
          <li className='desc-box__list--publisher'>{data.publisher}</li>
        </ul>
      </div>
    </S.BookInformation>
  );
}

const S = {
  BookInformation: styled.div`
    padding: 50px 0;
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
    .image-box {
      position: relative;
      font-size: 0;
    }
    .desc-box {
      border: 1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* width: 100%; */
      min-width: 400px;
      &__list {
        &--title {
          color: #000;
        }
      }
    }
  `,
};
