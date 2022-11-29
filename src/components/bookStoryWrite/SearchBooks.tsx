import React from 'react';
import styled from 'styled-components';

interface ISearchBooks {}

export default function SearchBooks({}: ISearchBooks) {
  return <S.SearchBooks>SearchBooks</S.SearchBooks>;
}

const S = {
  SearchBooks: styled.div``,
};
