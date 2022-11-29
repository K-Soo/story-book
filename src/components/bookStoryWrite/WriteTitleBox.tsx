import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@store';
import { getBookStoryPostState, setForm } from '@slice/bookStoryPostSlice';

export default function WriteTitleBox() {
  const { form } = useAppSelector(getBookStoryPostState);
  const dispatch = useAppDispatch();

  return (
    <S.WriteTitleBox>
      <input type='text' name='title' placeholder='제목을 입력해주세요.' value={form.title} onChange={e => dispatch(setForm(e))} />
      <div>
        <span>20</span>
        <span>30</span>
      </div>
    </S.WriteTitleBox>
  );
}

const S = {
  WriteTitleBox: styled.div`
    height: 40px;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};
