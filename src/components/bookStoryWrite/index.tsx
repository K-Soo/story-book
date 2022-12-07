import React from 'react';
import styled from 'styled-components';
import WriteGuide from '@components/bookStoryWrite/WriteGuide';
import Button from '@components/common/Button';
import { useForm, SubmitHandler, useFormContext } from 'react-hook-form';
import { useAppSelector } from '@store';
import { BookStoryFormValue } from '@types';
import Step1Post from '@components/bookStoryWrite/Step1Post';
import Step2Post from '@components/bookStoryWrite/Step2Post';
import { useRouter } from 'next/router';
interface IBookStoryWrite {
  onSubmit: SubmitHandler<BookStoryFormValue>;
  step: 'STEP1' | 'STEP2' | 'COMPLETE';
  setStep: React.Dispatch<React.SetStateAction<'STEP1' | 'STEP2' | 'COMPLETE'>>;
}

export default function BookStoryWrite({ onSubmit, step, setStep }: IBookStoryWrite) {
  const router = useRouter();
  const { bookInfo } = useAppSelector(state => state.bookStoryPost);

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = useFormContext<BookStoryFormValue>();

  return (
    <S.BookStoryWrite>
      <form onSubmit={handleSubmit(onSubmit)}>
        <WriteGuide />
        {step === 'STEP1' && (
          <Step1Post>
            <ButtonBox>
              <Button
                type='submit'
                label='글작성 취소'
                margin='0 15px 0 0'
                onClick={() => router.push('/book-story')}
              />
              <Button label='다음' onClick={() => setStep('STEP2')} disabled={!bookInfo} />
            </ButtonBox>
          </Step1Post>
        )}
        {step === 'STEP2' && (
          <Step2Post>
            <ButtonBox>
              <Button type='submit' label='이전' margin='0 15px 0 0' onClick={() => setStep('STEP1')} />
              <Button type='submit' label='출간하기' margin='0' disabled={!isValid} />
            </ButtonBox>
          </Step2Post>
        )}
      </form>
    </S.BookStoryWrite>
  );
}

const ButtonBox = styled.div`
  display: flex;
`;
const S = {
  BookStoryWrite: styled.section``,
};
