import React from 'react';
import styled from 'styled-components';
import Icon from 'src/icons/Icon';
// TODO : refactor
interface ISearchInput {
  value: string;
  maxLength?: number;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange, maxLength, disabled }: ISearchInput) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <S.SearchInput>
      <Icon name='Search' className='search-icon' />
      <input
        className='search-input'
        placeholder='검색어를 입력해주세요'
        value={value}
        onChange={onChange}
        ref={inputRef}
        maxLength={maxLength}
        disabled={disabled}
      />
      {value.length !== 0 && <Icon name='Close2' />}
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
    position: relative;
    background-color: #eff1f3;
    border-radius: 10px;
    padding: 0 10px;
    .search-icon {
      pointer-events: none;
    }
    .search-input {
      height: 100%;
      width: 100%;
      padding: 0 50px 0 5px;
    }
  `,
};
