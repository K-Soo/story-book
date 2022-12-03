import { useQuery } from 'react-query';

const OPTION = {
  suspense: false,
  keepPreviousData: true,
  retry: false,
  // staleTime: 600000, // 10 minutes
  // cacheTime: 900000, // 15 minutes
  // refetchOnMount: true,
  // refetchOnReconnect: true,
  // refetchOnWindowFocus: true,
};

export default function usePublicQuery(key: string[], urlFc: any, options: any, requestData: any) {
  const fetcher = async () => {
    const data = await urlFc(requestData);
    return data;
  };

  const { data, isLoading, isSuccess, isError, refetch, isFetching } = useQuery(key, fetcher, options ?? OPTION);

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    refetch,
    isFetching,
  };
}
