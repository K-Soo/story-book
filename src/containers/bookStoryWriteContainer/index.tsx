import React from 'react';
import BookStoryWrite from '@components/bookStoryWrite';
import { Post } from '@api';
import { useAppSelector } from '@store';
import { useRouter } from 'next/router';

export default function BookStoryWriteContainer() {
  const [step, setStep] = React.useState<'DEFAULT_FORM' | 'SEARCH_FORM'>('DEFAULT_FORM');
  const { form } = useAppSelector(state => state.bookStoryPost);
  const router = useRouter();

  const onClickSearchBook = React.useCallback(() => {
    router.push('/book-story/write/search');
  }, [router]);

  // TODO : API 통신 로직 작성
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
