import React from 'react';
import BookStoryWriteContainer from '@containers/bookStoryWriteContainer';
import { setInitialState } from '@slice/bookStoryPostSlice';
import { useAppSelector, useAppDispatch } from '@store';

interface IBookStoryWithPostContainer {}

export default function BookStoryWithPostContainer({}: IBookStoryWithPostContainer) {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setInitialState());
  }, []);

  return <BookStoryWriteContainer />;
}
