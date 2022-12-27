import React from 'react';
import styled from 'styled-components';
import { Pen } from 'src/icons/svg';
import Icon from 'src/icons/Icon';

interface IWriteButton {
  className: string;
  isOpenModal: boolean;
  handleClickWriteButton: () => void;
}

export default function WriteButton({ className, isOpenModal, handleClickWriteButton }: IWriteButton) {
  return (
    <S.WriteButton className={className} onClick={handleClickWriteButton}>
      {isOpenModal ? <Icon name='Close' style={{ color: '#fff' }} /> : <Icon name='Pen' style={{ color: '#fff' }} />}
    </S.WriteButton>
  );
}

const S = {
  WriteButton: styled.div`
    background: ${props => props.theme.colors.base};
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  `,
};
