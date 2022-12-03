import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface ITitleHeader {}

const PATH_TITLE: { [key: string]: string } = {
  '/book-story/[idx]': '아아아',
  '/book-story/write': '북스토리 글쓰기',
};

export default function TitleHeader({}: ITitleHeader) {
  const router = useRouter();
  console.log('router: ', router);
  return (
    <S.TitleHeader>
      <h1>{PATH_TITLE[router.pathname]}</h1>
    </S.TitleHeader>
  );
}

const S = {
  TitleHeader: styled.div`
    h1 {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
    }
  `,
};
