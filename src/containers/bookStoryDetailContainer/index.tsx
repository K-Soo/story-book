import React from 'react';
import { useRouter } from 'next/router';
import BookStoryDetail from '@components/bookStoryDetail';
import { useAppDispatch, useAppSelector } from '@store';
import { asyncGetFetchPost } from '@slice/bookStoryPostSlice';
import Skeleton from '@components/common/Skeleton';

export default function BookStoryDetailContainer() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(state => state.bookStoryPost);

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
