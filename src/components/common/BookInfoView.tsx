import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@store';
import Image from 'next/image';
import { setRemoveBookDetail } from '@slice/bookStoryPostSlice';
import { IPostCardTypes, BookDetailInfo } from '@types';
import BookDetailPanel from '@components/bookDetail/BookDetailPanel';
import Icon from 'src/icons/Icon';
import HorizontalLine from '@components/common/HorizontalLine';

interface IBookInfoView {
  bookInfo: BookDetailInfo;
}

export default function BookInfoView({ bookInfo }: IBookInfoView) {
  const dispatch = useAppDispatch();

  // TODO : 휴지통 퍼블리싱
  return (
    <S.BookInfoView>
      <S.RemoveButton onClick={() => dispatch(setRemoveBookDetail())}>
        <Icon name='Trash2' style={{ color: '#fff', width: '20px', height: '20px' }} />
      </S.RemoveButton>
      <div className='img-box'>
        <Image width='150' height='200' src={bookInfo?.image as string} alt='책 이미지' />
      </div>
      <div className='info'>
        <BookDetailPanel title='책 제목' desc={bookInfo.title} />
        <HorizontalLine height='1px' />
        <BookDetailPanel title='책 소개' desc={bookInfo.description} />
        <HorizontalLine height='1px' />
        <BookDetailPanel title='책 저자' desc={bookInfo.author} />
        <HorizontalLine height='1px' />
        <BookDetailPanel title='출판사' desc={bookInfo.publisher} />
      </div>
    </S.BookInfoView>
  );
}

const S = {
  BookInfoView: styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .img-box {
      display: flex;
      justify-content: center;
      padding: 10px 0;
    }
    .info {
      padding: 0 10px;
      &__title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      &__desc {
        font-size: 14px;
      }
    }
  `,
  RemoveButton: styled.button`
    z-index: 1;
    position: absolute;
    padding: 7px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    top: 5px;
    left: 5px;
    background-color: #8c8c8c;
  `,
};
