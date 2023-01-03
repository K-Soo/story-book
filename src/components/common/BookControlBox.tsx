import React from 'react';
import styled, { css } from 'styled-components';
import Spinners from '@components/common/Spinners';
import Button from '@components/common/Button';
import Icon from 'src/icons/Icon';
interface IBookControlBox {
  fetchUpdateWishBook: () => Promise<void>;
  fetchUpdateReadBook: () => Promise<void>;
  wishBook: number;
  readBook: number;
  loading: boolean;
}

export default function BookControlBox({
  fetchUpdateWishBook,
  fetchUpdateReadBook,
  wishBook,
  readBook,
  loading,
}: IBookControlBox) {
  return (
    <S.BookControlBox active={wishBook === 1 ? false : true}>
      <Button type='button' label='읽고있는 책' margin='0 15px 0 0' onClick={() => fetchUpdateReadBook()}>
        {readBook === 0 && (
          <Icon name='Check1' style={{ color: '#fff', marginRight: '5px', height: '24px', width: '24px' }} />
        )}
      </Button>
      <Button className='read-btn' type='button' label='읽고싶은 책' onClick={() => fetchUpdateWishBook()}>
        {wishBook === 0 && (
          <Icon name='Check1' style={{ color: '#fff', marginRight: '5px', height: '24px', width: '24px' }} />
        )}
        {loading && <Spinners isInner size={10} />}
      </Button>
    </S.BookControlBox>
  );
}

const S = {
  BookControlBox: styled.div<{ active: boolean }>`
    display: flex;
    justify-content: center;
    button {
      flex: 1 1 40%;
      height: 35px;
      font-size: 12px;
      position: relative;
    }
    .read-btn {
      ${props =>
        props.active &&
        css`
          background-color: #868e96;
        `};
    }
  `,
};
