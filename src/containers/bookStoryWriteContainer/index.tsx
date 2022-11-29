import React from 'react';
import BookStoryWrite from '@components/bookStoryWrite';
import { Post } from '@api';
import { useSession } from 'next-auth/react';
import { getBookStoryPostState } from '@slice/bookStoryPostSlice';
import { useAppDispatch, useAppSelector } from '@store';
import { setVisibilityFooter } from '@slice/layoutSlice';

export default function BookStoryWriteContainer() {
  const [step, setStep] = React.useState(0);
  const { form } = useAppSelector(getBookStoryPostState);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (step === 1) {
      dispatch(setVisibilityFooter(false));
    } else {
      dispatch(setVisibilityFooter(true));
    }
  }, [dispatch, step]);

  const onClickSearchBook = React.useCallback(() => setStep(1), []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestData = {
      title: form.title,
      content: '글쓰기 콘텐트',
    };
    try {
      const response = await Post.createWriteBookStory(requestData);
      console.log('북스토리 글쓰기 API : ', response);
    } catch (error) {
      console.log('error: ', error);
    } finally {
    }
  };

  return <BookStoryWrite onSubmit={onSubmit} onClickSearchBook={onClickSearchBook} step={step} />;
}
