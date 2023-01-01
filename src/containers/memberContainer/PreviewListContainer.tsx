import React from 'react';
import PreviewList from '@components/member/previewList';
import PreviewTap from '@components/member/previewList/PreviewTap';
import { Get } from '@api';
import usePrivateQuery from '@hooks/usePrivateQuery';
import { queryKeys } from '@constants';
import PreviewCard from '@components/member/previewList/PreviewCard';
import Spinners from '@components/common/Spinners';
import EmptyText from '@components/common/EmptyText';
import { IPostCardTypes } from '@types';
import Continue from '@components/member/previewList/Continue';

export type TTapTypes = 'LIKE' | 'SCRAP';
type TPostData = { postId: IPostCardTypes; createdAt: string };

export default function PreviewListContainer() {
  const [selectTap, setSelectTap] = React.useState<TTapTypes>('LIKE');

  const requestData = {
    queryKey: [queryKeys.BOOK_DETAIL],
    requestAPI: Get.getMemberPreviewLikes,
    options: {},
    requestData: { type: selectTap },
  };

  const { data, isSuccess, isLoading, isError } = usePrivateQuery(requestData);
  console.log('유저 프리뷰 API : ', data);

  return (
    <>
      <PreviewTap selectTap={selectTap} setSelectTap={setSelectTap} />
      <Continue />
      <PreviewList>
        {isLoading && <Spinners position='absolute' />}
        {isError && <div>error</div>}
        {isSuccess && data && (
          <>
            {data.result.length === 0 && <EmptyText text='데이터가 없어요!' />}
            {data.result.map((postData: TPostData) => (
              <PreviewCard key={postData.createdAt} item={postData} />
            ))}
          </>
        )}
      </PreviewList>
    </>
  );
}