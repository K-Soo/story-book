import React from 'react';
import styled from 'styled-components';
import WriteGuide from '@components/bookStoryWrite/WriteGuide';
import Button from '@components/common/Button';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useAppSelector } from '@store';
import { BookStoryFormValue } from '@types';
import Step1Post from '@components/bookStoryWrite/Step1Post';
import Step2Post from '@components/bookStoryWrite/Step2Post';
import { useRouter } from 'next/router';
import BottomFixedBox from '@components/common/BottomFixedBox';
import HorizontalLine from '@components/common/HorizontalLine';

interface IBookStoryWrite {
  onSubmit: SubmitHandler<BookStoryFormValue>;
  step: 'STEP1' | 'STEP2';
  setStep: React.Dispatch<React.SetStateAction<'STEP1' | 'STEP2'>>;
}

export default function BookStoryWrite({ onSubmit, step, setStep }: IBookStoryWrite) {
  //prettier-ignore
  const { handleSubmit, formState: { isValid,isSubmitting }} = useFormContext<BookStoryFormValue>();
  const { bookInfo } = useAppSelector(state => state.bookStoryPost);
  const router = useRouter();

  return (
    <S.BookStoryWrite>
      <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
        <WriteGuide />
        <HorizontalLine height='1px' />
        {step === 'STEP1' && (
          <Step1Post className='post-step'>
            <BottomFixedBox>
              <Button label='다음' margin='0 0 15px 0' onClick={() => setStep('STEP2')} disabled={!bookInfo} />
              <Button
                type='submit'
                label='글작성 취소'
                margin='0 15px 0 0'
                onClick={() => router.push('/book-story')}
              />
            </BottomFixedBox>
          </Step1Post>
        )}
        {step === 'STEP2' && (
          <>
            <Step2Post className='post-step'>
              <BottomFixedBox>
                <Button type='submit' margin='0 0 15px 0' label='출간하기' disabled={!isValid || isSubmitting} />
                <Button label='이전' onClick={() => setStep('STEP1')} />
              </BottomFixedBox>
            </Step2Post>
          </>
        )}
      </form>
    </S.BookStoryWrite>
  );
}

const S = {
  BookStoryWrite: styled.section`
    height: 100%;
    position: relative;
    .form-container {
      height: 100%;
      .post-step {
        /* min-height: calc(100% - 50px); */
        /* height: 100%; */
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: space-between; */
      }
    }
  `,
};
