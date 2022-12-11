import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@store';
import Image from 'next/image';
import { setRemoveBookDetail } from '@slice/bookStoryPostSlice';
import { IPostCardTypes, BookDetailInfo } from '@types';

interface IBookInfoView {
  bookInfo: BookDetailInfo;
}

export default function BookInfoView({ bookInfo }: IBookInfoView) {
  const dispatch = useAppDispatch();

  // TODO : 휴지통 퍼블리싱
  return (
    <S.BookInfoView>
      <S.RemoveButton onClick={() => dispatch(setRemoveBookDetail())}>
        <span>휴지통</span>
      </S.RemoveButton>
      <div>
        <Image width='150' height='200' src={bookInfo?.image as string} alt='책 이미지' />
      </div>
      <div className='info'>
        <h6 className='info__title'>{bookInfo?.title}</h6>
        {/* <p className='info__desc'>{bookInfo?.description}</p> */}
      </div>
    </S.BookInfoView>
  );
}

const S = {
  BookInfoView: styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    /* padding: 10px; */
    .info {
      margin-top: 10px;
      &__title {
        font-size: 20px;
        margin-bottom: 5px;
      }
    }
  `,
  RemoveButton: styled.button`
    z-index: 1;
    position: absolute;
    width: 30px;
    aspect-ratio: 1/1;
    border: 1px solid red;
    top: 0;
  `,
};
