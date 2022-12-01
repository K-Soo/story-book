import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@store';
import { getBookStoryPostState, setForm } from '@slice/bookStoryPostSlice';

export default function WriteTitleBox() {
  const { form } = useAppSelector(getBookStoryPostState);
  const dispatch = useAppDispatch();

  return (
    <S.WriteTitleBox>
      <input className='title-input' type='text' name='title' placeholder='제목을 입력해주세요' maxLength={30} value={form.title} onChange={e => dispatch(setForm(e))} />
      <div>
        <span>{form.title.length}/30</span>
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
    padding: 10px;
    .title-input {
      width: 100%;
    }
  `,
};
