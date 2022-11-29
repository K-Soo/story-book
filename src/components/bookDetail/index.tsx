import React from 'react';
import styled from 'styled-components';
import { IBookDetailInfo } from '@types';
import BookDetailPanel from '@components/bookDetail/BookDetailPanel';
import HorizontalLine from '@components/common/HorizontalLine';
interface IBookDetail {
  data: IBookDetailInfo;
  children: React.ReactNode;
}

export default function BookDetail({ data, children }: IBookDetail) {
  return (
    <S.BookDetail>
      {children}
      <S.BookIntroduction>
        <BookDetailPanel title='책 제목' desc={data.title} />
        <HorizontalLine />
        <BookDetailPanel title='책 소개' desc={data.description} />
        <HorizontalLine />
        <BookDetailPanel title='책 저자' desc={data.author} />
        <HorizontalLine />
        <BookDetailPanel title='출판사' desc={data.publisher} />
      </S.BookIntroduction>
    </S.BookDetail>
  );
}

const S = {
  BookDetail: styled.div`
    height: 100%;
  `,
  BookIntroduction: styled.div`
    height: 100%;
  `,
};
