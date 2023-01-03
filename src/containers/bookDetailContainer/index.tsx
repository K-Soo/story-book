import React from 'react';
import BookDetail from '@components/bookDetail';
import { Get, Put } from '@api';
import { useRouter } from 'next/router';
import usePublicQuery from '@hooks/usePublicQuery';
import { queryKeys } from '@constants';
import BookInformation from '@components/bookDetail/BookInformation';
import BookControlBox from '@components/common/BookControlBox';
import { toast } from 'react-toastify';
import useLoading from '@hooks/useLoading';
import Skeleton from '@components/common/Skeleton';

export default function BookDetailContainer() {
  const router = useRouter();
  const [loading, setLoading] = useLoading();

  const selectFc = (value: any) => {
    const element = value.result.elements[0].elements[0];
    const findItem = element.elements.find((el: any) => el.name === 'item');
    const result = findItem.elements.map((el: any) => {
      if (el.elements) {
        return { [el.name]: el.elements[0] };
      }
      return { [el.name]: { type: 'element', text: 'unknown' } };
    });
    const data: any = {};

    for (const item of result) {
      const obj = Object.entries(item)[0];
      const value = (obj[1] as any).text;
      data[obj[0]] = value;
    }
    data.wishBook = value.wishBook;

    return { result: data };
  };

  const OPTION = {
    select: selectFc,
  };

  const { data, isSuccess, isLoading, isError, refetch } = usePublicQuery(
    [queryKeys.BOOK_DETAIL, router.query.id as string],
    Get.getBookDetail,
    OPTION,
    router.query.id as string
  );
  console.log('도서상세 API : ', data);

  const fetchUpdateWishBook = async () => {
    setLoading(true);
    try {
      const response = await Put.updateWishBook({ form: data.result });
      console.log('읽고싶은책 API : ', response);
      if (response.status !== 200) {
        throw new Error();
      }
      toast.success('나의 서적에 저장되었어요!');
      refetch();
    } catch (error) {
      toast.error('잠시 후 다시시도해주세요');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Skeleton.detail />}
      {isSuccess && (
        <BookDetail data={data.result}>
          <BookInformation data={data.result} />
          <BookControlBox loading={loading} fetchUpdateWishBook={fetchUpdateWishBook} wishBook={data.result.wishBook} />
        </BookDetail>
      )}
    </>
  );
}
