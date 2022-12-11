import { useQuery } from 'react-query';

const OPTION = {
  suspense: false,
  keepPreviousData: true,
  retry: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
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
