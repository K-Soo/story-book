import { useInfiniteQuery, useQuery } from 'react-query';
import axios from 'axios';

interface TUseInfiniteScroll {
  url: any;
  requestBody: any;
  queryKey: string[];
  option?: object;
}

export default function useInfiniteScroll({ url, requestBody, queryKey, option }: TUseInfiniteScroll) {
  const fetchUrl = async (pageParams: number) => {
    const res = await url({ ...requestBody, page: pageParams });
    return res.result;
  };

  const OPTIONS = {
    ...option,
  };

  const { data, fetchNextPage, isSuccess, hasNextPage, isLoading, isFetching, isError, refetch } = useInfiniteQuery(queryKey, ({ pageParam = 1 }) => fetchUrl(pageParam), {
    ...OPTIONS,
    getNextPageParam: (lastPage: any, all) => {
      return lastPage.start < lastPage.total ? lastPage.start + 1 : undefined;
    },
  });

  return {
    data,
    isLoading,
    isFetching,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isError,
    refetch,
  };
}
