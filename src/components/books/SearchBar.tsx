import React from 'react';
import styled from 'styled-components';
// import { Search } from 'src/icons/svg';
import { useAppSelector } from '@store';
import { getUserState } from '@slice/userSlice';

interface ISearchBar {}

export default function SearchBar({}: ISearchBar) {
  const test = useAppSelector(getUserState);

  React.useEffect(() => {}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.SearchBar>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <button type='submit'>{/* <Search /> */}</button>
      </form>
    </S.SearchBar>
  );
}

const S = {
  SearchBar: styled.div`
    width: 100%;
    border: 1px solid red;
  `,
};
