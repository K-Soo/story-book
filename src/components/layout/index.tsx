import React from 'react';
import styled, { css } from 'styled-components';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import Main from '@components/layout/main';
import path from 'src/constants/path';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '@store';
import WriteBottomSheet from '@components/layout/footer/WriteBottomSheet';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  const router = useRouter();
  const { isShowFooter } = useAppSelector(state => state.layout);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const handleClickWriteButton = React.useCallback(() => setIsOpenModal(prev => !prev), []);

  return (
    <>
      {isOpenModal && <WriteBottomSheet isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />}
      <S.Layout pathname={router.pathname}>
        <Header className='header' />
        <Main>{children}</Main>
        {isShowFooter && (
          <Footer
            className='footer'
            setIsOpenModal={setIsOpenModal}
            handleClickWriteButton={handleClickWriteButton}
            isOpenModal={isOpenModal}
          />
        )}
      </S.Layout>
    </>
  );
}

const S = {
  Layout: styled.div<{ pathname: string }>`
    ${props =>
      (props.pathname === path.SIGN_IN.path || props.pathname === path.SIGN_UP.path) &&
      css`
        min-height: 100vh;
        .header {
          display: none;
        }
        .footer {
          display: none;
        }
      `};
    min-width: 320px;
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    /* border: 1px solid green; */
    /* min-height: calc(100vh - 60px); */
    /* min-height: calc(100vh); */
    /* border: 1px solid red; */
  `,
};
