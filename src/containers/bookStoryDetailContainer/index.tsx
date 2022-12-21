import React from 'react';
import { useRouter } from 'next/router';
import BookStoryDetail from '@components/bookStoryDetail';
import { useAppDispatch, useAppSelector } from '@store';
import { asyncGetFetchPost, setInitialState } from '@slice/bookStoryPostSlice';
import { useForm, FormProvider } from 'react-hook-form';
import Skeleton from '@components/common/Skeleton';
import { BookStoryFormValue, TDocumentId } from '@types';
import { Get, Post } from '@api';
import { DevTool } from '@hookform/devtools';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { queryKeys } from '@constants';
import usePublicQuery from '@hooks/usePublicQuery';
import { UseQueryOptions } from 'react-query';

const schema = yup
  .object({
    title: yup.string().required().min(5).max(30),
    content: yup.string().required().min(1).max(1000),
  })
  .required();

export default function BookStoryDetailContainer() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const methods = useForm<BookStoryFormValue>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  React.useEffect(() => {
    dispatch(setInitialState());
  }, []);

  // console.log('getValues: ', methods.getValues());
  // console.log('isDirty: ', methods.formState.isDirty);
  // console.log('isValidating: ', methods.formState.isValidating);
  // console.log('isValid: ', methods.formState.isValid);

  const OPTION: UseQueryOptions = {
    enabled: router.query.idx ? true : false,
    retry: 0,
    staleTime: 0,
    cacheTime: 0,
  };

  const { data, isSuccess, isLoading, isError } = usePublicQuery(
    [queryKeys.BOOK_STORY_DETAIL_POST, router.query.idx as string],
    Get.getBookStoryPostDetail,
    OPTION,
    { id: router.query.idx as string }
  );
  console.log('북스토리 상세 API : ', data);

  // React.useEffect(() => {
  //   if (router.query.idx) {
  //     const promise = dispatch(asyncGetFetchPost(router.query.idx as string));
  //     return () => {
  //       promise.abort();
  //     };
  //   }
  // }, [dispatch, router.query.idx]);

  const fetchPostLike = async (postId: TDocumentId) => {
    try {
      const response = await Post.createLikeBookStory({ postId });
      console.log('좋아요 API : ', response);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      console.log();
    }
  };

  React.useEffect(() => {
    if (isSuccess && data) {
      methods.reset({
        title: data.result.title,
        content: data.result.content,
      });
    }
  }, [data, methods, isSuccess]);

  if (isLoading) {
    return <Skeleton.detail />;
  }

  if (isError) {
    return <div>isError</div>;
  }

  return (
    <>
      {isSuccess && data && data.status === 200 && (
        <>
          <FormProvider {...methods}>
            <BookStoryDetail data={data.result} fetchPostLike={fetchPostLike} />
          </FormProvider>
        </>
      )}
    </>
  );
}
