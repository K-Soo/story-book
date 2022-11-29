import React from 'react';
import styled from 'styled-components';
import Input from '@components/common/Input';
// import { Close } from 'src/icons/svg';
import { useAppSelector, useAppDispatch } from '@store';
import { getSearchState, setKeyword, setToggleSearchForm } from '@slice/searchSlice';
import RecentSearch from '@components/searchForm/RecentSearch';

interface ISearchForm {
  handleSubmitForm: React.FormEventHandler<HTMLFormElement>;
}

export default function SearchForm({ handleSubmitForm }: ISearchForm) {
  const { keyword } = useAppSelector(getSearchState);
  const dispatch = useAppDispatch();

  return (
    <S.SearchForm>
      <div className='close-box'>
        <i className='close-box__icon'>{/* <Close onClick={() => dispatch(setToggleSearchForm(false))} /> */}</i>
      </div>
      <form onSubmit={handleSubmitForm}>
        <Input label='어떤 도서를 찾으시나요?' onChange={e => dispatch(setKeyword(e.target.value))} focusing value={keyword} />
      </form>
      <RecentSearch />
    </S.SearchForm>
  );
}

const S = {
  SearchForm: styled.div`
    z-index: 2;
    border: 1px solid #999;
    background-color: #fff;
    border-radius: 10px;
    max-width: 640px;
    width: 90%;
    height: 80%;
    padding: 10px;
    .close-box {
      display: flex;
      justify-content: flex-end;
      &__icon {
        display: block;
        width: 35px;
        height: 35px;
        font-size: 0;
        cursor: pointer;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  `,
};
