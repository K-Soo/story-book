import React from 'react';
import styled from 'styled-components';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface ISocialList {}

export default function SocialList({}: ISocialList) {
  const router = useRouter();
  return (
    <S.SocialList>
      <div className='login-check'>
        {router.pathname === '/sign-in' && (
          <div className='login-check__sign-up'>
            <p className='login-check__sign-up--text'>아직회원이 아니신가요?</p>
            <Link href='/sign-up'>
              <a>회원가입하기</a>
            </Link>
          </div>
        )}
        {router.pathname === '/sign-up' && <Link href='/sign-in'>로그인하기</Link>}
      </div>
    </S.SocialList>
  );
}

const S = {
  SocialList: styled.div`
    margin-top: 30px;
    .login-check {
      display: flex;
      justify-content: flex-end;
      &__sign-up {
        display: flex;
        a {
          color: ${props => props.theme.colors.base};
        }
        &--text {
          margin-right: 5px;
        }
      }
    }
  `,
};
