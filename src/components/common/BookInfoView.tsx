import styled from 'styled-components';
import { useAppSelector } from '@store';
import Image from 'next/image';

export default function BookInfoView() {
  const { bookInfo } = useAppSelector(state => state.bookStoryPost);

  // TODO : 휴지통 퍼블리싱
  return (
    <S.BookInfoView>
      <S.RemoveButton>
        <span>휴지통</span>
      </S.RemoveButton>
      <div>
        <Image width='200' height='300' src={bookInfo?.image as string} alt='책 이미지' />
      </div>
      <div>
        <p>{bookInfo?.title}</p>
        <p>{bookInfo?.description}</p>
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
