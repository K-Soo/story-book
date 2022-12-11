import React from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import { IBookDetailInfo } from '@types';
import { useAppSelector, useAppDispatch } from '@store';
import BookInfoView from '@components/common/BookInfoView';
import { setOpenBookSearchForm } from '@slice/bookStoryPostSlice';
import { useRouter } from 'next/router';

export default function AddBook() {
  const { bookInfo } = useAppSelector(state => state.bookStoryPost);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <S.AddBook>
      {bookInfo && <BookInfoView bookInfo={bookInfo} />}
      {!bookInfo && (
        <div className='wrapper'>
          <p className='wrapper--text'>도서 정보를 추가해주세요.</p>
          {/* <Button label='도서 정보 추가하기' onClick={() => dispatch(setOpenBookSearchForm(true))} /> */}
          <Button label='도서 정보 추가하기' onClick={() => router.push('/book-story/write/search')} />
        </div>
      )}
    </S.AddBook>
  );
}

const S = {
  AddBook: styled.div`
    background-color: #f9f9f9;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      &--text {
        color: ${props => props.theme.colors.black};
        margin-bottom: 15px;
      }
    }
  `,
};
