import React from 'react';
import styled from 'styled-components';
import Header from '@components/layout/header';
import TitleHeader from '@components/layout/header/TitleHeader';
import HorizontalLine from '@components/common/HorizontalLine';
import Icon from 'src/icons/Icon';
import { useRouter } from 'next/router';

interface IDetailLayout {
  children: React.ReactNode;
  marginBottom?: string;
  title: string;
}

export default function DetailLayout({ title, marginBottom, children }: IDetailLayout) {
  const router = useRouter();

  return (
    <S.DetailLayout marginBottom={marginBottom}>
      <Header>
        <Icon name='ArrowLeft' onClick={() => router.back()} />
        <TitleHeader title={title} />
        <Icon name='Home' onClick={() => router.replace('/')} />
      </Header>
      <HorizontalLine height='1px' />
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
      /* border: 1px solid red; */
    }
  `,
};
