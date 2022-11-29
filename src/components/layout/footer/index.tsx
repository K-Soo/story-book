import React from 'react';
import styled from 'styled-components';
import MenuList from '@components/layout/footer/MenuList';
import WriteButton from '@components/layout/footer/WriteButton';

interface IFooter {
  className: string;
  handleClickWriteButton: () => void;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Footer({ className, handleClickWriteButton }: IFooter) {
  return (
    <>
      <S.Footer className={className}>
        <MenuList className='menu-list' />
        <div className='write'>
          <WriteButton className='write__button' handleClickWriteButton={handleClickWriteButton} />
        </div>
      </S.Footer>
    </>
  );
}

const S = {
  Footer: styled.footer`
    z-index: 10;
    position: fixed;
    bottom: 0;
    height: 60px;
    width: 100%;
    display: flex;
    max-width: 640px;
    color: #8a8c8f;
    padding: 0 15px;
    border: 1px solid #dee5e7;
    background-color: #fff;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 0 10px 1px #e4e4e4;
    .menu-list {
      flex: 1 1 80%;
    }
    .write {
      flex: 1 1 20%;
      position: relative;
      width: auto;
      &__button {
        position: absolute;
        right: 0;
        bottom: 30%;
      }
    }
  `,
};
