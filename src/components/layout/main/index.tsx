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
      <div className='page'>{children}</div>
    </S.Main>
  );
}

const S = {
  Main: styled.main<{ pathname: string; isShowFooter: boolean }>`
    ${props =>
      (props.pathname === path.SIGN_IN.path || props.pathname === path.SIGN_UP.path) &&
      css`
        min-height: 100vh;
        padding: 0px;
      `};
    margin-bottom: ${props => (props.isShowFooter ? '60px' : '0')};
    min-height: ${props => (props.isShowFooter ? 'calc(100vh - 60px - 45px)' : 'calc(100vh - 45px)')};
    overflow: hidden;
    display: flex;
    background-color: #fff;
    /* background-color: #eff1f3; */
    .page {
      width: 100%;
    }
  `,
};
