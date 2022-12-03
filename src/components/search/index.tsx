import React from 'react';
import styled from 'styled-components';

interface ISearch {
  children: React.ReactNode;
}

export default function Search({ children }: ISearch) {
  return (
    <S.Search>
      {React.Children.toArray(children)[0]}
      {React.Children.toArray(children)[1]}
      <div className='item'>{React.Children.toArray(children)[2]}</div>
    </S.Search>
  );
}

const S = {
  Search: styled.div`
    /* border: 1px solid red; */
    .item {
      width: 100%;
    }
  `,
};
