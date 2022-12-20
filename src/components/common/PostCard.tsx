import React from 'react';
import { IPostCardTypes } from '@types';
import styled from 'styled-components';
import HorizontalLine from '@components/common/HorizontalLine';
import { useRouter } from 'next/router';
import Image from 'next/image';
import moment from 'moment';
export interface IPostCard {
  item: IPostCardTypes;
}

export default function PostCard({ item }: IPostCard) {
  console.log('item: ', item);
  const router = useRouter();

  return (
    <S.PostCard onClick={() => router.push(`/book-story/${item._id}`)}>
      <div className='top-wrapper'>
        <div className='top-wrapper__image'>
          {item.bookInfo?.image && <Image src={item.bookInfo.image} alt='' objectFit='cover' layout='fill' />}
        </div>
        <div className='top-wrapper__desc'>
          <div className='top-wrapper__date-box'>
            <h2 className=''>{moment(item.createdAt).format('YYYY.MM.DD')}</h2>
            {/* <h2 className=''>{item.rate}</h2> */}
          </div>
          <h2 className='top-wrapper__desc--title'>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      </div>

      <HorizontalLine height='1px' />
      <div className='info-wrapper'>
        <div className='info-wrapper__user'>
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
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    cursor: pointer;
    .top-wrapper {
      flex-basis: 80%;
      display: flex;
      justify-content: space-between;
      &__date-box {
        display: flex;
        justify-content: end;
        margin-bottom: 15px;
      }
      &__image {
        position: relative;
        flex: 1 1 25%;
      }
      &__desc {
        flex: 1 1 75%;
        padding: 15px;
        &--title {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }

    .info-wrapper {
      flex-basis: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* background-color: #fff; */
      padding: 0 10px;
    }
  `,
};
