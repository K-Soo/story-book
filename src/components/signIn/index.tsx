import React from 'react';
import styled from 'styled-components';
import Form from '@components/signIn/Form';
// import { useSession, signIn, signOut } from "next-auth/client"
import { useSession, signIn, signOut } from 'next-auth/react';
interface ISignIn {}

export default function SignIn({}: ISignIn) {
  return (
    <S.SignIn>
      <Form />
    </S.SignIn>
  );
}

const S = {
  SignIn: styled.article`
    display: flex;
    justify-content: center;
    border: 3px solid blue;
    a {
      font-size: 50px;
    }
  `,
};
