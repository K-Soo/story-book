import React from 'react';
import styled from 'styled-components';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@components/common/Button';

interface IUser {}

export default function User({}: IUser) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  function onClickLogOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    signOut();
  }

  return <S.User>{!loading && <>{session && <Button onClick={onClickLogOut} label='로그아웃' />}</>}</S.User>;
}

const S = {
  User: styled.div``,
};
