import { time } from 'console';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

type TItem = {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
};

interface IBookCard {
  item: TItem;
}

export default function BookCard({ item }: IBookCard) {
  const router = useRouter();

  const handleClickBook = (isbn: string) => {
    router.push(`/book/${isbn}`);
  };

  return (
    <S.BookCard onClick={() => handleClickBook(item.isbn)}>
      <div className='image-box'>
        <div className='image-box__wrapper'>
          <Image src={item.image} alt='Picture of the author' sizes='100vw' layout='fill' />
        </div>
      </div>
      <div className='description-box'>title: {item.title}</div>
    </S.BookCard>
  );
}

const S = {
  BookCard: styled.article`
    width: 100%;
    height: 180px;
    border-radius: 10px;
    margin-bottom: 15px;
    display: flex;
    background-color: ${props => props.theme.colors.backGround};
    box-shadow: 0 1px 2px 1px #e4e4e4;
    &:hover {
      transition: all 0.3s;
      transform: scale(1.01);
      box-shadow: 0 2px 2px 0 rgb(156 39 176 / 14%), 0 3px 1px -2px rgb(156 39 176 / 20%), 0 1px 5px 0 rgb(156 39 176 / 12%);
    }
    cursor: pointer;
    .image-box {
      flex-basis: 20%;
      min-width: 100px;
      &__wrapper {
        position: relative;
        border-radius: 20px;
        height: 100%;
        font-size: 0;
        padding: 1px;
        img {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }
    }
    .description-box {
      padding: 15px;
      flex-basis: 80%;
    }
    ${props => props.theme.mobile`
      height: 120px;
      .image-box{
        flex-basis: 30%;
      }
      .description-box{
        padding: 15px;
        flex-basis: 70%;
      }
    `};
  `,
};
