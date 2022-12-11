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
import StarRate from '@components/common/StarRate';

interface IStep2Post {
  children: React.ReactNode;
  className: string;
}

export default function Step2Post({ className, children }: IStep2Post) {
  return (
    <S.Step2Post className={className}>
      <WriteTitleBox />
      <HorizontalLine height='1px' margin='0 0 50px 0' />
      <WriteBody />
      <HorizontalLine height='1px' margin='0 0 50px 0' />
      <S.FormLabel>도서 별점</S.FormLabel>
      <StarRate value={5} />
      {children}
    </S.Step2Post>
  );
}

const S = {
  Step2Post: styled.div`
    margin-top: 30px;
  `,
  FormLabel: styled.label``,
};
