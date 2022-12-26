import { useQuery } from 'react-query';

interface IUsePrivateQuery {
  queryKey: string[];
  requestAPI: any;
  options?: object;
  requestData: any;
}

export default function usePrivateQuery({ queryKey, requestAPI, options, requestData }: IUsePrivateQuery) {
  const OPTION = {
    suspense: false,
    keepPreviousData: true,
    retry: 0,
    ...options,
  };

  const fetcher = async () => {
    const data = await requestAPI(requestData);
    return data;
  };

  const { data, isLoading, isSuccess, isError, isFetching, refetch } = useQuery(queryKey, fetcher, OPTION);

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    refetch,
  };
}
