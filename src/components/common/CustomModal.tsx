import React from 'react';
import styled, { css } from 'styled-components';
import DarkBackground from '@components/common/DarkBackground';
import { useAppDispatch, useAppSelector } from '@store';
import { setInitModal } from '@slice/modalSlice';
import Icon from 'src/icons/Icon';
import Button from '@components/common/Button';
import { useRouter } from 'next/router';

export default function CustomModal({ isOpen }: { isOpen: boolean }) {
  const { text } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <DarkBackground>
      <S.CustomModal isOpen={isOpen}>
        <div className='close-box'>
          <Icon name='Close' onClick={() => dispatch(setInitModal())} style={{ width: '24px', height: '24px' }} />
        </div>
        <div className='text-box'>
          <p>{text}</p>
        </div>
        <div className='line' />
        <div className='button-box'>
          <button onClick={() => router.push({ pathname: '/sign-in', query: `returnTo=${router.asPath}` })}>
            로그인
          </button>
        </div>
      </S.CustomModal>
    </DarkBackground>
  );
}

const S = {
  CustomModal: styled.div<{ isOpen: boolean }>`
    width: 300px;
    background-color: #fff;
    border-radius: 5px;
    height: 130px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: changed 0.3s linear;
    will-change: animation;
    @keyframes changed {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .close-box {
      width: 100%;
      font-size: 0;
      display: flex;
      justify-content: flex-end;
      flex: 1 1 10%;
    }
    .text-box {
      flex: 1 1 70%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .line {
      height: 1px;
      border: 0.2px solid #e5e5e5;
      width: 100%;
    }
    .button-box {
      margin-top: 10px;
      flex: 1 1 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        height: 30px;
        width: 80px;
        font-size: 13px;
        border: 1px solid ${props => props.theme.colors.base};
        color: ${props => props.theme.colors.base};
        font-weight: 600;
      }
    }
  `,
};
