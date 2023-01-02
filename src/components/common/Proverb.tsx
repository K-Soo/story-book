import React from 'react';
import styled from 'styled-components';

interface IProverb {}

export default function Proverb({}: IProverb) {
  return (
    <S.Proverb>
      <div className='top-line'></div>
      <blockquote>
        <p>loasldpasldpasldpalspd</p>
        <q cite='https://www.codingfactory.net/'>글쓴이</q>
      </blockquote>
      <div className='bottom-line'></div>
    </S.Proverb>
  );
}

const S = {
  Proverb: styled.div`
    font-size: 12px;
    .top-line {
      border-top: 1px solid #000;
    }
    blockquote {
      padding: 30px 0;
    }
    .bottom-line {
      border-top: 1px solid #000;
    }
  `,
};
