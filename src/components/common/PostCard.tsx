import React from 'react';
import { IPostCardTypes } from '@types';
import styled from 'styled-components';
import HorizontalLine from '@components/common/HorizontalLine';
import { useRouter } from 'next/router';

export interface IPostCard {
  item: IPostCardTypes;
}

export default function PostCard({ item }: IPostCard) {
  const router = useRouter();

  return (
    <S.PostCard onClick={() => router.push(`/book-story/${item._id}`)}>
      <div className='image-wrapper'></div>
      <div className='desc-wrapper'>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </div>
      <HorizontalLine height='1px' />
      <div className='info-wrapper'>
        <div className='info-wrapper__user'>
          <img src='' alt='' />
          <span>{item.author.name}</span>
        </div>
        <div>
          <span>{item.views}</span>
        </div>
      </div>
    </S.PostCard>
  );
}

const S = {
  PostCard: styled.article`
    height: 200px;
    display: flex;
    flex-direction: column;
    /* background-color: #fff; */
    cursor: pointer;
    .image-wrapper {
      flex-basis: 40%;
      /* border: 1px solid #000; */
    }
    .desc-wrapper {
      flex-basis: 40%;
      /* border: 1px solid #000; */
    }
    .info-wrapper {
      flex-basis: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
    }
  `,
};
