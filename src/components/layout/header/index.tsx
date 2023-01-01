import React from 'react';
import styled from 'styled-components';

interface IHeader {
  children?: React.ReactNode;
}

export default function Header({ children }: IHeader) {
  return <S.Header>{children}</S.Header>;
}

const S = {
  Header: styled.header`
    z-index: 1;
    height: 45px;
    position: sticky;
    top: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  `,
};
