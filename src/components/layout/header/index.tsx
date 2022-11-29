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
    position: sticky;
    top: 0;
    color: #182431be;
    background-color: #fff;
    z-index: 1;
    /* box-shadow: 0 0 10px 1px #e4e4e4; */
    padding: 5px 10px 0 10px;
  `,
};
