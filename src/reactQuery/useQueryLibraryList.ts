import usePrivateQuery from '@hooks/usePrivateQuery';
import { queryKeys } from '@constants';
import { Get } from '@api';
import { ILibraryResponseTypes } from '@types';

interface ILibraryResponseData extends ILibraryResponseTypes {
  readBooksCount: number;
  wishBooksCount: number;
}

export default function useQueryLibraryList() {
  const selectFc = (responseData: ILibraryResponseData) => {
    const readBooksCount = responseData.result.readBooks.length;
    const wishBooksCount = responseData.result.wishBooks.length;
    responseData.result.readBooksCount = readBooksCount;
    responseData.result.wishBooksCount = wishBooksCount;
    return responseData;
  };

  const requestData = {
    queryKey: [queryKeys.MEMBER_LIBRARY],
    requestAPI: Get.getMemberLibrary,
    options: {
      select: selectFc,
      suspense: true,
      useErrorBoundary: true,
    },
    requestData: { type: 1 },
  };

  const { data, isSuccess, isLoading, isError, refetch } = usePrivateQuery(requestData);
  console.info('유저 서재 API : ', data);
  return { data, isSuccess, isLoading, isError, refetch };
}
