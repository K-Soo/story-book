import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import path from 'src/constants/path';
import { useAppSelector } from '@store';

interface IMain {
  children: React.ReactNode;
}

export default function Main({ children }: IMain) {
  const router = useRouter();
  const { isShowFooter } = useAppSelector(state => state.layout);

  return (
    <S.Main isShowFooter={isShowFooter} pathname={router.pathname}>
      {children}
    </S.Main>
  );
}

const S = {
  Main: styled.div<{ pathname: string; isShowFooter: boolean }>`
    /* padding: 0 10px; */
    /* padding-bottom: 60px; */
    margin-bottom: ${props => (props.isShowFooter ? '60px' : '0')};
    min-height: ${props => (props.isShowFooter ? 'calc(100vh - 105px)' : 'calc(100vh - 45px)')};
    ${props =>
      (props.pathname === path.SIGN_IN.path || props.pathname === path.SIGN_UP.path) &&
      css`
        min-height: 100vh;
        padding: 0px;
      `};
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #eff1f3;
  `,
};
