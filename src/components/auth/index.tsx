import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
// import { Search,Kakao } from "src/icons/svg";
import { signIn } from 'next-auth/react';

interface IAuth {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  submitForm: any;
}

export default function Auth({ onSubmitHandler, onChange, children, submitForm }: IAuth) {
  const { pathname } = useRouter();
  const router = useRouter();

  return (
    <S.Auth>
      <div className='wrapper'>
        <div className='close-box'>
          <i onClick={() => router.push('/')}>X</i>
        </div>
        <div className='banner-box'>
          <h1>배너</h1>
        </div>
        <form className='form-box' onSubmit={onSubmitHandler}>
          {pathname === '/sign-up' && <Input name='name' label='닉네임' onChange={onChange} />}
          <Input name='email' onChange={onChange} label='이메일' value={submitForm.email} />
          {/* <Input
            name='password'
            type="password"
            label='비밀번호'
            onChange={onChange}
            value={submitForm.password}
            icon={<Search />}
          /> */}
          {router.pathname === '/sign-in' && <div>아이디 저장</div>}
          <Button type='submit' label={pathname === '/sign-up' ? '가입' : '로그인'} />
          <KakaoButton onClick={() => signIn('kakao')}>
            {/* <Kakao /> */}
            <span className='kakao-text'>카카오로 시작하기</span>
          </KakaoButton>
        </form>
        {children}
      </div>
    </S.Auth>
  );
}

const KakaoButton = styled.button`
  background-color: rgb(255, 229, 0);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 15px;
  &:hover {
    transition: all 0.3s;
    box-shadow: 0 2px 2px 0 rgb(156 39 176 / 14%), 0 3px 1px -2px rgb(156 39 176 / 20%), 0 1px 5px 0 rgb(156 39 176 / 12%);
  }
  .kakao-text {
    padding-left: 10px;
  }
`;
const S = {
  Auth: styled.section`
    margin: 0 auto;
    width: 100%;
    height: 500px;
    background-color: #fff;
    .wrapper {
      padding: 10px;
      max-width: 500px;
      margin: 0 auto;
      .banner-box {
        text-align: center;
        margin-bottom: 15px;
      }
      .close-box {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
      }
      .form-box {
        display: flex;
        flex-direction: column;
      }
    }
  `,
};
