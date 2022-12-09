import React from 'react';
import styled from 'styled-components';
import BottomFixedBox from '@components/common/BottomFixedBox';
import Button from '@components/common/Button';
import { useAppDispatch } from '@store';
import { useRouter } from 'next/router';
interface IBookStoryWriteSearch {
  children: React.ReactNode;
}

export default function BookStoryWriteSearch({ children }: IBookStoryWriteSearch) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <S.bookStoryWriteSearch>
      <div className='form'>{children}</div>
      <BottomFixedBox>
        <Button label='뒤로가기' onClick={() => router.back()} />
      </BottomFixedBox>
    </S.bookStoryWriteSearch>
  );
}

const S = {
  bookStoryWriteSearch: styled.div`
    padding: 0 10px;
  `,
};
