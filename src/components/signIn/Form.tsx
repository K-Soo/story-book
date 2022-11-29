import React from "react";
import styled from "styled-components";
import { social } from 'src/utils';

interface IForm {

};

export default function Form({ }: IForm) {
  return (
    <S.Form>
      <h1>LOGIN</h1>
      <form action="">
        <label>
          <input type="text" />
        </label>
        <input type="text" />
        <button type='button'>로그인</button>
      </form>
      <div>
        <a href={social.naver}>네이버</a>
      </div>
    </S.Form>
  );
};

const S = {
  Form: styled.div`
  border: 1px solid #000;
  padding: 20px;
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid #000; */
  }
  `,
};
