import React from 'react';
import { useRouter } from 'next/router';
import { Get } from '@api';
import BookStoryDetail from '@components/bookStoryDetail';
import usePublicQuery from '@hooks/usePublicQuery';
import { queryKeys } from '@constants';
import { useAppDispatch } from '@store';
import { setData } from '@slice/bookStoryPostSlice';

export default function BookStoryDetailContainer() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const OPTION = {
    enabled: !!router.query.idx,
    suspense: false,
    keepPreviousData: true,
    retry: 0,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  };

  const { data, isSuccess, isLoading, isError } = usePublicQuery(
    [queryKeys.BOOK_STORY_DETAIL_POST, router.query.idx as string],
    Get.getBookStoryPostDetail,
    OPTION,
    { id: router.query.idx }
  );
  console.log('북스토리 상세 API : ', data);
  console.log('isError: ', isError);

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(setData({ name: 'title', value: data.result.title }));
      dispatch(setData({ name: 'content', value: data.result.content }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>isError</div>;
  }

  return <>{isSuccess && <BookStoryDetail data={data.result} />}</>;
}
