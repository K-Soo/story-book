import React from 'react';
import BookStoryWrite from '@components/bookStoryWrite';
import { Post } from '@api';
import { useAppSelector, useAppDispatch } from '@store';
import { setInitialState, setReadOnly } from '@slice/bookStoryPostSlice';
import { useRouter } from 'next/router';
import { useForm, FormProvider, useFormContext, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BookStoryFormValue } from '@types';
import { DevTool } from '@hookform/devtools';

//prettier-ignore
const schema = yup.object({
  title: yup.string().required().min(5).max(30),
  content: yup.string().required().min(10).max(1000),
  rate: yup.number().required(),
}).required();

export default function BookStoryWriteContainer() {
  const [step, setStep] = React.useState<'STEP1' | 'STEP2'>('STEP1');
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { bookInfo } = useAppSelector(state => state.bookStoryPost);

  const methods = useForm<BookStoryFormValue>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      title: '',
      content: '',
      rate: 3,
    },
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  React.useEffect(() => {
    // dispatch(setInitialState());
    dispatch(setReadOnly(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO : API 통신 로직 작성
  const onSubmit: SubmitHandler<BookStoryFormValue> = async (data: BookStoryFormValue) => {
    setLoading(true);
    const requestData = {
      title: data.title,
      content: data.content,
      rate: data.rate,
      bookInfo: bookInfo,
    };
    try {
      console.log('data: ', data);
      const response = await Post.createWriteBookStory(requestData);
      console.log('북스토리 글쓰기 API : ', response);
      if (response.status !== 200) {
        throw new Error('');
      }
      router.push({ pathname: '/book-story/write/complete', query: { postId: response.result } });
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <BookStoryWrite onSubmit={onSubmit} step={step} setStep={setStep} />
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  );
}
