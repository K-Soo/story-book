import { useQuery } from "react-query";

export default function usePrivateQuery(key: string[], urlFc: any, options: object, requestData: any) {

  const OPTION = {
    // enabled: !!user,
    suspense: false,
    keepPreviousData: true,
    retry: 0,
    ...options,
  };

  const fetcher = async () => {
    const data = await urlFc(requestData);
    return data;
  };

  const { data, isLoading, isSuccess, isError, isFetching, refetch } = useQuery(
    key,
    fetcher,
    OPTION
  );

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    refetch
  }
};