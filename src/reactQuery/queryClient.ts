import { QueryClient } from 'react-query';

export const defaultQueryClientOptions = {
  queries: {
    onError: () => console.log('ㅁㄴㅇㄴㅁ'),
    retry: 0,
    keepPreviousData: true,
    suspense: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
  mutations: {
    // onError: queryErrorHandler,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
