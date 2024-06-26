import React from 'react';
import styled from 'styled-components';
import usePrivateQuery from '@hooks/usePrivateQuery';
import { queryKeys } from '@constants';
import { Get } from '@api';
import MemberLibrary from '@components/memberLibrary';
import LibraryTap from '@components/memberLibrary/LibraryTap';
import LibraryList from '@components/memberLibrary/LibraryList';
import Spinners from '@components/common/Spinners';
import Skeleton from '@components/common/Skeleton';
import EmptyText from '@components/common/EmptyText';
import { ILibraryResponseTypes } from '@types';
import useQueryLibraryList from '@reactQuery/useQueryLibraryList';
import { useIsFetching } from 'react-query';
import { useQueryClient } from 'react-query';
import InterceptorComponent from '@reactQuery/InterceptorComponent';
import Error from 'src/error';
import { ErrorBoundary } from 'react-error-boundary'; // (*)
export default function MemberLibraryContainer() {
  const { data, isSuccess, isLoading, isError } = useQueryLibraryList();
  // console.log('isError: ', isError);
  // console.log('data: ', data);
  // console.log('isLoading: ', isLoading);

  return (
    <>
      <MemberLibrary data='asd'>
        {/* {isLoading && <Skeleton.oneLineList />} */}

        {/* {/* {isSuccess && data && (
          <>
            <LibraryTap />
            <LibraryList test='sdsadsad' />
          </>
        )} */}

        <React.Suspense fallback={<StyledLoading />}>
          <InterceptorComponent query={''}>
            {/* <Error> */}
            <LibraryList />
            {/* </Error> */}
          </InterceptorComponent>
        </React.Suspense>
      </MemberLibrary>
    </>
  );
}
const StyledLoading = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;
