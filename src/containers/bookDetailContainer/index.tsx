import React from 'react';
import BookDetail from '@components/bookDetail';
import { Get } from '@api';
import { useRouter } from 'next/router';
import usePublicQuery from '@hooks/usePublicQuery';
import { queryKeys } from '@constants';
import BookInformation from '@components/bookDetail/BookInformation';
import BookControlBox from '@components/common/BookControlBox';
import CustomModal from '@components/common/CustomModal';
import DarkBackground from '@components/common/DarkBackground';
interface IBookDetailContainer {}

export default function BookDetailContainer({}: IBookDetailContainer) {
  const router = useRouter();

  const selectFc = (value: any) => {
    const element = value.result.elements[0].elements[0];
    const findItem = element.elements.find((el: any) => el.name === 'item');
    const result = findItem.elements.map((el: any) => ({ [el.name]: el.elements[0] }));
    const data: any = {};

    for (const item of result) {
      const obj = Object.entries(item)[0];
      const value = (obj[1] as any).text;
      data[obj[0]] = value;
    }
    return { result: data };
  };

  const OPTION = {
    suspense: false,
    keepPreviousData: true,
    retry: 0,
    staleTime: 900000,
    cacheTime: 1500000,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    select: selectFc,
  };

  const { data, isSuccess, isLoading } = usePublicQuery(
    [queryKeys.BOOK_DETAIL, router.query.id as string],
    Get.getBookDetail,
    OPTION,
    router.query.id as string
  );

  console.log('도서상세 API : ', data);

  return (
    <>
      {isLoading && <div>...loading</div>}
      {/* <DarkBackground>
        <CustomModal />
      </DarkBackground> */}
      {isSuccess && (
        <BookDetail data={data.result}>
          <BookInformation data={data.result} />
          <BookControlBox />
        </BookDetail>
      )}
    </>
  );
}
