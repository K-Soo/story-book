import styled from 'styled-components';
import Image from 'next/image';
import { BookDetailInfo } from '@types';

interface IBookDetailView {
  bookInfo: BookDetailInfo;
}

export default function BookDetailView({ bookInfo }: IBookDetailView) {
  return (
    <S.BookDetailView>
      <div className='image-box'>
        <Image src={bookInfo.image} height='300' width='200' alt='책 상세' />
      </div>
      <div className='desc-box'>
        <p>{bookInfo.description}</p>
      </div>
    </S.BookDetailView>
  );
}

const S = {
  BookDetailView: styled.div`
    margin-bottom: 50px;
    .image-box {
    }
    .desc-box {
      margin-top: 20px;
    }
  `,
};
