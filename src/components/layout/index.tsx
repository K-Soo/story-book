import React from 'react';
import styled, { css } from 'styled-components';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import Main from '@components/layout/main';
import path from 'src/constants/path';
import SearchForm from '@components/searchForm';
import DarkBackground from '@components/common/DarkBackground';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '@store';
import { setToggleSearchForm } from '@slice/searchSlice';
import WriteBottomSheet from '@components/layout/footer/WriteBottomSheet';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  const router = useRouter();
  const { keyword, isOpenSearchForm } = useAppSelector(state => state.search);
  const { isShowFooter } = useAppSelector(state => state.layout);

  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const handleClickWriteButton = React.useCallback(() => setIsOpenModal(prev => !prev), []);

  const handleSubmitForm = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (keyword.trim() === '') return;
      dispatch(setToggleSearchForm(false));
      router.push(`/search?keyword=${keyword}`);
    },
    [dispatch, keyword, router],
  );

  return (
    <>
      {isOpenSearchForm && (
        <DarkBackground>
          <SearchForm handleSubmitForm={handleSubmitForm} />
        </DarkBackground>
      )}
      {isOpenModal && <WriteBottomSheet isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />}
      <S.Layout pathname={router.pathname}>
        <Header className='header' />
        <Main>{children}</Main>
        {isShowFooter && <Footer className='footer' setIsOpenModal={setIsOpenModal} handleClickWriteButton={handleClickWriteButton} isOpenModal={isOpenModal} />}
      </S.Layout>
    </>
  );
}

const S = {
  Layout: styled.div<{ pathname: string }>`
    min-width: 320px;
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid green;
    min-height: calc(100vh - 60px);
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
  `,
};
