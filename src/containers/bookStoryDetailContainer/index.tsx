import React from 'react';
import { useRouter } from 'next/router';
import { Get } from '@api';
import BookStoryDetail from '@components/bookStoryDetail';
import usePublicQuery from '@hooks/usePublicQuery';
import { queryKeys } from '@constants';
import { useAppDispatch, useAppSelector } from '@store';
import { setData, getBookStoryPostState, asyncGetFetchPost } from '@slice/bookStoryPostSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import Skeleton from '@components/common/Skeleton';

export default function BookStoryDetailContainer() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { form, status } = useAppSelector(state => state.bookStoryPost);
  console.log('form: ', form);
  console.log('status: ', status);

  // const OPTION = {
  //   enabled: !!router.query.idx,
  //   suspense: false,
  //   keepPreviousData: true,
  //   retry: 0,
  //   refetchOnMount: false,
  //   refetchOnReconnect: false,
  //   refetchOnWindowFocus: false,
  // };

  // const { data, isSuccess, isLoading, isError } = usePublicQuery(
  //   [queryKeys.BOOK_STORY_DETAIL_POST, router.query.idx as string],
  //   Get.getBookStoryPostDetail,
  //   OPTION,
  //   { id: router.query.idx }
  // );
  // console.log('북스토리 상세 API : ', data);

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

  return <>{status === 'SUCCESS' && <BookStoryDetail />}</>;
}
