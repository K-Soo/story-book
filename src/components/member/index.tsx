import styled from 'styled-components';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@components/common/Button';

interface IMember {
  children?: React.ReactNode;
}

export default function Member({ children }: IMember) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  function onClickLogOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    signOut();
  }

  return <S.Member>{children}</S.Member>;
}

const S = {
  Member: styled.div``,
};
