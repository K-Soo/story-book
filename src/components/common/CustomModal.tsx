import React from 'react';
import styled from 'styled-components';
import DarkBackground from '@components/common/DarkBackground';
import { useAppDispatch, useAppSelector } from '@store';
import { setInitModal } from '@slice/modalSlice';
import Button from '@components/common/Button';

export default function CustomModal() {
  const { text } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  return (
    <DarkBackground>
      <S.CustomModal>
        <div className='text-box'>
          <p>{text}</p>
        </div>
        <div className='line' />
        <div className='button-box'>
          <button onClick={() => dispatch(setInitModal())}>확인</button>
        </div>
      </S.CustomModal>
    </DarkBackground>
  );
}

const S = {
  CustomModal: styled.div`
    width: 300px;
    background-color: #fff;
    border-radius: 5px;
    height: 120px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .text-box {
      flex: 1 1 80%;
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
    }
  `,
};
