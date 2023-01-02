import React from 'react';
import BookStoryWriteContainer from '@containers/bookStoryWriteContainer';
import { setInitialState } from '@slice/bookStoryPostSlice';
import { useAppSelector, useAppDispatch } from '@store';

export default function BookStoryWithPostContainer() {
  return <BookStoryWriteContainer />;
}
