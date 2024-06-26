import React from 'react';
import styled from 'styled-components';

interface IInterceptorComponent {
  children: React.ReactNode;
  query: any;
}

export default function InterceptorComponent({ query, children }: IInterceptorComponent) {
  // const { data, isLoading, isError } = query();
  // console.log('isLoading: ', isLoading);
  // console.log('data: ', data);
  // console.log('isError: ', isError);
  return (
    // <React.Suspense fallback={<StyledLoading />}>
    <S.InterceptorComponent>{children}</S.InterceptorComponent>
    // </React.Suspense>
  );
}

const StyledLoading = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;
const S = {
  InterceptorComponent: styled.div``,
};
