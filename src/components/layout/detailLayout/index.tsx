import React from 'react';
import styled from 'styled-components';
import Header from '@components/layout/header';
import TitleHeader from '@components/layout/header/TitleHeader';
import HorizontalLine from '@components/common/HorizontalLine';

interface IDetailLayout {
  children: React.ReactNode;
}

export default function DetailLayout({ children }: IDetailLayout) {
  return (
    <S.DetailLayout>
      <Header>
        <TitleHeader />
      </Header>
      <HorizontalLine height='1px' />
      <main>{children}</main>
    </S.DetailLayout>
  );
}

const S = {
  DetailLayout: styled.div`
    min-width: 320px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid red;
    min-height: 100vh;
  `,
};
