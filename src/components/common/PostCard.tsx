import React from 'react';
import { IPostCardTypes } from '@types';
import styled, { css } from 'styled-components';
import HorizontalLine from '@components/common/HorizontalLine';
import { useRouter } from 'next/router';
import Image from 'next/image';
import moment from 'moment';
import Icon from 'src/icons/Icon';
import { TDisplayTypes } from '@containers/bookStoryContainer';
import ProfileImage from '@components/common/ProfileImage';

export interface IPostCard {
  item: IPostCardTypes;
  displayType: TDisplayTypes;
}

export default function PostCard({ item, displayType }: IPostCard) {
  console.log('item: ', item);
  const router = useRouter();

  return (
    <S.PostCard onClick={() => router.push(`/book-story/${item._id}`)} displayType={displayType}>
      <div className='top-wrapper'>
        <div className='top-wrapper__image'>
          {item.bookInfo?.image && <Image src={item.bookInfo.image} alt='책' objectFit='cover' layout='fill' />}
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
          <ProfileImage image={item.author.image} height={24} width={24} margin='0 10px 0 0' />
          <span className='info-wrapper__user--name'>{item.author.name}</span>
        </div>
        <div className='info-wrapper__wish'>
          {item.likeCount !== 0 && (
            <>
              <Icon name='Heart1' />
              <span className='info-wrapper__wish--count'>{item.likeCount}</span>
            </>
          )}
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
    padding: 0 10px;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    ${props =>
      props.displayType === 'FLEX' &&
      css`
        margin: 5px;
        border-radius: 10px;
      `}
    .top-wrapper {
      flex-basis: 80%;
      margin-bottom: 15px;
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
        padding: 10px 0;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        &--date-box {
          display: flex;
          justify-content: end;
          margin-bottom: 15px;
        }
        &--title {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 10px;
          color: #222;
        }
        &--content {
          max-width: 300px;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
          display: -webkit-box;
          color: #888;
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
      padding: 0 10px;
      &__user {
        display: flex;
        align-items: center;
        font-size: 12px;
        &--name {
          font-weight: 500;
          &::before {
            content: 'by';
            margin-right: 3px;
            color: #888;
          }
        }
      }
      &__wish {
        display: flex;
        align-items: flex-end;
        &--count {
          padding-left: 6px;
        }
        svg {
          font-size: 0;
          height: 16px;
          width: 16px;
        }
      }
    }
  `,
};
