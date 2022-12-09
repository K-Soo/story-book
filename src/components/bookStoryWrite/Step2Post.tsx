import styled from 'styled-components';
import WriteGuide from '@components/bookStoryWrite/WriteGuide';
import HorizontalLine from '@components/common/HorizontalLine';
import WriteTitleBox from '@components/bookStoryWrite/WriteTitleBox';
import WriteBody from '@components/bookStoryWrite/WriteBody';
import Button from '@components/common/Button';
import { useForm, SubmitHandler, useFormContext } from 'react-hook-form';
import { Post } from '@api';
import { useAppSelector } from '@store';
import { BookStoryFormValue } from '@types';

interface IStep2Post {
  children: React.ReactNode;
  className: string;
}

export default function Step2Post({ className, children }: IStep2Post) {
  return (
    <S.Step2Post className={className}>
      <HorizontalLine height='1px' />
      <HorizontalLine height='2px' />
      <WriteTitleBox />
      <HorizontalLine height='1px' />
      <WriteBody />
      {children}
    </S.Step2Post>
  );
}

const S = {
  Step2Post: styled.div``,
};
