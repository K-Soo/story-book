import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@store';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { BookStoryFormValue } from '@types';
import HorizontalLine from '@components/common/HorizontalLine';

interface IWriteTitleBox {
  readonly?: boolean | undefined;
  margin?: string;
}

export default function WriteTitleBox({ readonly, margin }: IWriteTitleBox) {
  const { watch, register } = useFormContext<BookStoryFormValue>();
  const { title } = watch();
  const { isReadOnly } = useAppSelector(state => state.bookStoryPost);

  return (
    <S.WriteTitleBox isReadOnly={isReadOnly} margin={margin}>
      <input
        className='title-input'
        type='text'
        maxLength={30}
        placeholder='제목을 입력해주세요 (최소 5글자 이상)'
        {...register('title')}
        readOnly={isReadOnly}
      />
      {/* <ErrorMessage errors={errors} name='title' /> */}
      {!isReadOnly && (
        <div>
          <span>{title ? title.length : 0}/30</span>
        </div>
      )}
    </S.WriteTitleBox>
  );
}

const S = {
  WriteTitleBox: styled.div<{ isReadOnly?: boolean; margin?: string }>`
    height: ${props => (props.isReadOnly ? 'auto' : '40px')};
    margin: ${props => props.margin ?? '0'};
    margin-bottom: ${props => (props.isReadOnly ? '30px' : '0')};
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .title-input {
      width: 100%;
      &:read-only {
        color: #000;
        font-size: 30px;
      }
    }
  `,
};
