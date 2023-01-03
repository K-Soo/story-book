import React from 'react';
import styled from 'styled-components';
import Spinners from '@components/common/Spinners';
import Button from '@components/common/Button';

interface IBookControlBox {
  fetchUpdateWishBook: () => Promise<void>;
  wishBook: number;
  loading: boolean;
}

export default function BookControlBox({ fetchUpdateWishBook, wishBook, loading }: IBookControlBox) {
  return (
    <S.BookControlBox>
      <Button type='button' label='읽고있는 책' margin='0 15px' />
      <Button
        type='button'
        label='읽고싶은 책'
        disabled={wishBook === 0 ? false : true}
        onClick={() => fetchUpdateWishBook()}
      >
        <Spinners isInner size={10} />
      </Button>
    </S.BookControlBox>
  );
}

const S = {
  BookControlBox: styled.div`
    display: flex;
    button {
      height: 35px;
      font-size: 14px;
      position: relative;
      :disabled {
        background-color: #868e96;
      }
    }
  `,
};
