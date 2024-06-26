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
const iconStyle: React.CSSProperties = { color: '#fff', marginRight: '5px', height: '24px', width: '24px' };

export default function BookControlBox({
  fetchUpdateWishBook,
  fetchUpdateReadBook,
  wishBook,
  readBook,
  loading,
}: IBookControlBox) {
  return (
    <S.BookControlBox>
      <StyledButton
        className='read-btn'
        type='button'
        activeRead={readBook === 0 ? true : false}
        onClick={() => fetchUpdateReadBook()}
      >
        {readBook === 1 && <Icon name='Check1' style={iconStyle} />}
        읽고있는 책
      </StyledButton>
      <StyledButton
        className='wish-btn'
        type='button'
        activeWish={wishBook === 0 ? true : false}
        onClick={() => fetchUpdateWishBook()}
      >
        {wishBook === 1 && <Icon name='Check1' style={iconStyle} />}
        {loading && <Spinners isInner size={10} />}
        읽고싶은 책
      </StyledButton>
    </S.BookControlBox>
  );
}

const StyledButton = styled.button<{ activeWish?: boolean; activeRead?: boolean }>`
  height: 35px;
  font-size: 12px;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  background-color: red;
  .wish-btn {
    ${props =>
      props.activeWish &&
      css`
        background-color: #868e96;
      `};
  }

  .read-btn {
    ${props =>
      props.activeRead &&
      css`
        background-color: #868e96;
      `};
  }
`;

const S = {
  BookControlBox: styled.div`
    display: flex;
    justify-content: center;
  `,
};
