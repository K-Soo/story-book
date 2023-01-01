import { useQuery } from 'react-query';

export default function usePublicQuery(key: string[], urlFc: any, options: any, requestData: any) {
  const fetcher = async () => {
    const data = await urlFc(requestData);
    return data;
  };

  const { data, isLoading, isSuccess, isError, refetch, isFetching } = useQuery(key, fetcher, options);

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    refetch,
    isFetching,
  };
}
