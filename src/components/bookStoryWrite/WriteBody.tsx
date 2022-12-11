import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@store';
import { BookStoryFormValue } from '@types';
import { useFormContext } from 'react-hook-form';

export default function WriteBody() {
  const { isReadOnly } = useAppSelector(state => state.bookStoryPost);
  const { register } = useFormContext<BookStoryFormValue>();

  return (
    <S.WriteBody>
      <div className='write-box'>
        <textarea
          cols={5}
          rows={3}
          wrap='on'
          {...register('content')}
          placeholder='10글자 이상입력해주세요'
          readOnly={isReadOnly}
        />
      </div>
    </S.WriteBody>
  );
}

const S = {
  WriteBody: styled.div`
    background-color: ${props => props.theme.colors.white};
    height: 200px;
    .write-box {
      height: 100%;
      textarea {
        width: 100%;
        height: 100%;
        word-break: break-all;
      }
    }
  `,
};
