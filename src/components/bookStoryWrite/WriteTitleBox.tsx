import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@store';
import { getBookStoryPostState, setForm } from '@slice/bookStoryPostSlice';

interface IWriteTitleBox {
  readonly?: boolean | undefined;
}

export default function WriteTitleBox({ readonly }: IWriteTitleBox) {
  const { form } = useAppSelector(getBookStoryPostState);
  const dispatch = useAppDispatch();

  return (
    <S.WriteTitleBox readonly={readonly}>
      {readonly && <h2 className='post-title'>{form.title}</h2>}
      {!readonly && (
        <>
          <input
            className='title-input'
            type='text'
            name='title'
            placeholder='제목을 입력해주세요'
            maxLength={30}
            value={form.title}
            onChange={e => dispatch(setForm(e))}
          />
          <div>
            <span>{form.title.length}/30</span>
          </div>
        </>
      )}
    </S.WriteTitleBox>
  );
}

const S = {
  WriteTitleBox: styled.div<{ readonly?: boolean }>`
    height: ${props => (props.readonly ? 'auto' : '40px')};
    margin-bottom: ${props => (props.readonly ? '30px' : '0')};
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .post-title {
      font-size: 30px;
      font-weight: 700;
      color: #000000;
    }
    .title-input {
      width: 100%;
    }
  `,
};
