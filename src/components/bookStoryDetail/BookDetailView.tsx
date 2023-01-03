import styled from 'styled-components';
import Image from 'next/image';
import { BookDetailInfo } from '@types';
import BookDetailPanel from '@components/bookDetail/BookDetailPanel';
import HorizontalLine from '@components/common/HorizontalLine';

interface IBookDetailView {
  bookInfo: BookDetailInfo;
}

export default function BookDetailView({ bookInfo }: IBookDetailView) {
  return (
    <S.BookDetailView>
      <div className='image-box'>
        <Image src={bookInfo.image} height='200' width='150' alt='책 상세' />
        <BookDetailPanel title='책 제목' desc={bookInfo.title} margin='0 0 0 15px' padding='0' />
      </div>
      <BookDetailPanel title='책 소개' desc={bookInfo.description} padding='20px 0' />
      <HorizontalLine height='2px' />
      <BookDetailPanel title='책 저자' desc={bookInfo.author} padding='20px 0' />
    </S.BookDetailView>
  );
}

const S = {
  BookDetailView: styled.div`
    margin-bottom: 10px;
    .image-box {
      display: flex;
    }
    .desc-box {
      margin-top: 20px;
    }
  `,
};
