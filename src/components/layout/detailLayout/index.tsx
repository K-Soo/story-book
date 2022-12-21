import React from 'react';
import styled from 'styled-components';
import Header from '@components/layout/header';
import TitleHeader from '@components/layout/header/TitleHeader';
import HorizontalLine from '@components/common/HorizontalLine';

interface IDetailLayout {
  children: React.ReactNode;
  marginBottom?: string;
}

export default function DetailLayout({ children, marginBottom }: IDetailLayout) {
  return (
    <S.DetailLayout marginBottom={marginBottom}>
      <Header>
        <TitleHeader />
      </Header>
      <main>{children}</main>
    </S.DetailLayout>
  );
}

const S = {
  DetailLayout: styled.div<{ marginBottom?: string }>`
    min-width: 320px;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: ${props => props.marginBottom};
    display: flex;
    flex-direction: column;
    main {
      height: 100%;
    }
  `,
};
