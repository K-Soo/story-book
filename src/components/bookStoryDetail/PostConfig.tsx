import React from 'react';
import styled from 'styled-components';
import { asyncGetFetchPost, setReadOnly } from '@slice/bookStoryPostSlice';
import { useAppDispatch } from '@store';

export default function PostConfig() {
  const dispatch = useAppDispatch();

  return (
    <S.PostConfig>
      <button className='modify' onClick={() => dispatch(setReadOnly(false))}>
        글수정
      </button>
      <button className='remove'>삭제</button>
    </S.PostConfig>
  );
}

const S = {
  PostConfig: styled.div`
    height: 20px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    button {
      color: ${props => props.theme.colors.text1};
      :hover {
        color: ${props => props.theme.colors.black};
      }
    }
    .modify {
      margin-right: 15px;
    }
  `,
};
