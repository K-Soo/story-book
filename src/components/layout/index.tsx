import React from 'react';
import styled, { css } from 'styled-components';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import Main from '@components/layout/main';
import path from 'src/constants/path';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '@store';
import Toolbar from '@components/layout/header/Toolbar';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  const router = useRouter();
  const { isShowFooter } = useAppSelector(state => state.layout);

  return (
    <>
      <S.Layout pathname={router.pathname}>
        <Header>
          <Toolbar />
        </Header>
        <Main>{children}</Main>
        {isShowFooter && <Footer />}
      </S.Layout>
    </>
  );
}

const S = {
  Layout: styled.div<{ pathname: string }>`
    min-width: 320px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    /* border: 1px solid green; */
    /* min-height: calc(100vh - 60px); */
    /* min-height: calc(100vh); */
    /* border: 1px solid red; */
  `,
};
