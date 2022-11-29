import React from 'react';
import styled from 'styled-components';
// import { Pen } from 'src/icons/svg';

interface IWriteButton {
  className: string;
  handleClickWriteButton: () => void;
}

export default function WriteButton({ className, handleClickWriteButton }: IWriteButton) {
  return (
    <S.WriteButton className={className} onClick={handleClickWriteButton}>
      {/* <Pen /> */}
    </S.WriteButton>
  );
}

const S = {
  WriteButton: styled.div`
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    background: ${props => props.theme.colors.base};
  `,
};
