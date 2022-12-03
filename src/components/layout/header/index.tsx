import React from 'react';
import styled from 'styled-components';
import Toolbar from '@components/layout/header/Toolbar';

interface IHeader {
  className: string;
}

export default function Header({ className }: IHeader) {
  return (
    <S.Header className={className}>
      <Toolbar />
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    z-index: 1;
    position: sticky;
    top: 0;
    background-color: #fff;
    padding: 5px 10px 0 10px;
  `,
};
