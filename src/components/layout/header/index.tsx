import React from 'react';
import styled from 'styled-components';
import Toolbar from '@components/layout/header/Toolbar';

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
    border: 1px solid red;
  `,
};
