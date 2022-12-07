import React from 'react';
import { useRouter } from 'next/router';
import BookStoryDetail from '@components/bookStoryDetail';
import { useAppDispatch, useAppSelector } from '@store';
import { asyncGetFetchPost } from '@slice/bookStoryPostSlice';
import { useForm, FormProvider, useFormContext, SubmitHandler, Resolver } from 'react-hook-form';
import Skeleton from '@components/common/Skeleton';
import { Get } from '@api';
import { BookStoryFormValue } from '@types';

export default function BookStoryDetailContainer() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { status, form } = useAppSelector(state => state.bookStoryPost);
  console.log('form: ', form);

  const methods = useForm<BookStoryFormValue>();

  React.useEffect(() => {
    if (router.query.idx) {
      (async () => {
        try {
          const res = await Get.getBookStoryPostDetail({ id: router.query.idx as string });
          console.log('책상세 API TEST : ', res);
        } catch (error) {
          console.log('router.query.idx: ', error);
        }
      })();
    }
  }, [router.query.idx]);

  React.useEffect(() => {
    if (router.query.idx) {
      const promise = dispatch(asyncGetFetchPost(router.query.idx as string));
      return () => {
        promise.abort();
      };
    }
  }, [dispatch, router.query.idx]);

  if (status === 'LOADING') {
    return <Skeleton.detail />;
  }
  if (status === 'ERROR') {
    return <div>isError</div>;
  }

  return (
    <>
      {status === 'SUCCESS' && (
        <FormProvider {...methods}>
          <BookStoryDetail />
        </FormProvider>
      )}
    </>
  );
}
