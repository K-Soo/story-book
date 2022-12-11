import React from 'react';
import BookStoryWriteContainer from '@containers/bookStoryWriteContainer';
import { setInitialState } from '@slice/bookStoryPostSlice';
import { useAppSelector, useAppDispatch } from '@store';

interface IBookStoryWithPostContainer {}

export default function BookStoryWithPostContainer({}: IBookStoryWithPostContainer) {
  return <BookStoryWriteContainer />;
}
