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
    padding-left: 15px;
    margin: 10px 0;
    cursor: pointer;
    color: #888;
    box-shadow: rgb(0 0 0 / 7%) 0px 4px 16px 0px;
    :hover {
      color: #222;
    }
  `,
};
