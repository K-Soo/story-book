import styled from 'styled-components';
import { INaverBookSearchResponse, BookDetailInfo } from '@types';

// TODO : 타입지정
interface IBookCardOneLine {
  data: BookDetailInfo;
  handleClickTargetBook: (data: BookDetailInfo) => void;
}

export default function BookCardOneLine({ data, handleClickTargetBook }: IBookCardOneLine) {
  return <S.BookCardOneLine onClick={() => handleClickTargetBook(data)}>{data.title}</S.BookCardOneLine>;
}

const S = {
  BookCardOneLine: styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid #aaa;
    padding-left: 15px;
    margin: 10px 0;
    cursor: pointer;
  `,
};
