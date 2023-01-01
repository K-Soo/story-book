import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface ITitleHeader {
  title: string;
}

export default function TitleHeader({ title }: ITitleHeader) {
  return (
    <S.TitleHeader>
      <h1>{title}</h1>
    </S.TitleHeader>
  );
}

const S = {
  TitleHeader: styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      color: #888;
    }
  `,
};
