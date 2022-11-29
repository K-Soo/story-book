import React from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';

interface IBookControlBox {}

export default function BookControlBox({}: IBookControlBox) {
  return (
    <S.BookControlBox>
      <Button type='button' label='읽은 책' onClick={() => console.log('asd')} />
      <Button type='button' label='읽고있는 책' margin='0 15px' />
      <Button type='button' label='읽고싶은 책' />
    </S.BookControlBox>
  );
}

const S = {
  BookControlBox: styled.div`
    display: flex;
  `,
};
