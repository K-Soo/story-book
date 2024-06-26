import styled from 'styled-components';
import { ILibraryTypes } from '@types';

interface IMemberLibrary {
  // data: ILibraryTypes;
  data: any;
  children: React.ReactNode;
}

export default function MemberLibrary({ data, children }: IMemberLibrary) {
  return <S.MemberLibrary>{children}</S.MemberLibrary>;
}

const S = {
  MemberLibrary: styled.div`
    height: calc(100vh - 46px);
    position: relative;
  `,
};
