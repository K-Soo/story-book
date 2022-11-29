import React from 'react';
import styled from 'styled-components';
import SearchBar from '@components/books/SearchBar';
interface IBooks {
  handleSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleChangeKeyword: () => void;
}

export default function Books({}: IBooks) {
  return (
    <S.Books>
      <SearchBar />
    </S.Books>
  );
}

const S = {
  Books: styled.section``,
};
