import styled from 'styled-components';

interface IPopularityBook {}

export default function PopularityBook({}: IPopularityBook) {
  return (
    <S.PopularityBook>
      <h1>인기있는도서</h1>
    </S.PopularityBook>
  );
}

const S = {
  PopularityBook: styled.div`
    background-color: #fff;
    margin: 0 10px;
    height: 100px;
  `,
};
