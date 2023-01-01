import { QueryClient } from 'react-query';

export const defaultQueryClientOptions = {
  queries: {
    // onError: queryErrorHandler,
    // staleTime: 600000, // 10 minutes
    // cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
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
