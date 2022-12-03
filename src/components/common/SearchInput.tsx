import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@store';
import { getSearchState, setKeyword, setToggleSearchForm } from '@slice/searchSlice';

export default function SearchInput() {
  const { keyword } = useAppSelector(getSearchState);
  const dispatch = useAppDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <S.SearchInput>
      <input
        className='search-input'
        placeholder='검색어를 입력해주세요'
        value={keyword}
        onChange={e => dispatch(setKeyword(e.target.value))}
        ref={inputRef}
      />
      <span>X</span>
    </S.SearchInput>
  );
}

const S = {
  SearchInput: styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border: 1px solid rgb(208, 208, 208);
    position: relative;
    .search-input {
      height: 100%;
      width: 100%;
      padding: 0 50px 0 15px;
    }
    // TODO :: ICON 변경
    span {
      position: absolute;
      right: 15px;
    }
  `,
};
