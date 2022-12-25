import React from 'react';
import { IPostCardTypes } from '@types';
import styled, { css } from 'styled-components';
import HorizontalLine from '@components/common/HorizontalLine';
import { useRouter } from 'next/router';
import Image from 'next/image';
import moment from 'moment';
import Icon from 'src/icons/Icon';
import { TDisplayTypes } from '@containers/bookStoryContainer';

export interface IPostCard {
  item: IPostCardTypes;
  displayType: TDisplayTypes;
}

export default function PostCard({ item, displayType }: IPostCard) {
  const router = useRouter();

  return (
    <S.PostCard onClick={() => router.push(`/book-story/${item._id}`)} displayType={displayType}>
      <div className='top-wrapper'>
        <div className='top-wrapper__image'>
          {item.bookInfo?.image && <Image src={item.bookInfo.image} alt='' objectFit='cover' layout='fill' />}
        </div>
        {displayType === 'VERTICAL' && (
          <div className='top-wrapper__desc'>
            <div className='top-wrapper__desc--date-box'>
              <h2 className=''>{moment(item.createdAt).format('YYYY.MM.DD')}</h2>
            </div>
            <h2 className='top-wrapper__desc--title'>{item.title}</h2>
            <p className='top-wrapper__desc--content'>{item.content}</p>
          </div>
        )}
      </div>

      <HorizontalLine height='1px' />
      <div className='info-wrapper'>
        <div className='info-wrapper__user'>
          <span>{item.author.name}</span>
        </div>
        <div className='info-wrapper__wish'>
          <Icon name='Heart1' />
          <span className='info-wrapper__wish--count'>{item.likeCount}</span>
        </div>
      </div>
    </S.PostCard>
  );
}

const S = {
  PostCard: styled.article<{ displayType: TDisplayTypes }>`
    flex: 1 1 44%;
    height: 200px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    cursor: pointer;
    ${props =>
      props.displayType === 'FLEX' &&
      css`
        margin: 5px;
        border-radius: 10px;
      `}
    .top-wrapper {
      flex-basis: 80%;
      ${props =>
        props.displayType === 'FLEX' &&
        css`
          display: flex;
          justify-content: center;
          padding: 10px 0;
        `}
      ${props =>
        props.displayType === 'VERTICAL' &&
        css`
          display: flex;
          justify-content: space-between;
        `}
      &__image {
        position: relative;
        ${props =>
          props.displayType === 'FLEX' &&
          css`
            width: 100px;
            height: 100%;
          `}
        ${props =>
          props.displayType === 'VERTICAL' &&
          css`
            flex: 1 1 25%;
            min-width: 100px;
          `}
      }
      &__desc {
        flex: 1 1 75%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        &--date-box {
          display: flex;
          justify-content: end;
          margin-bottom: 15px;
        }
        &--title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        &--content {
          max-width: 300px;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
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
      &__user {
      }
      &__wish {
        display: flex;
        align-items: center;
        &--count {
          padding-left: 6px;
        }
        svg {
          height: 16px;
          width: 16px;
        }
      }
    }
  `,
};
