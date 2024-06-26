import styled from 'styled-components';

interface ILibraryTap {}

export default function LibraryTap({}: ILibraryTap) {
  return <S.LibraryTap>LibraryTap</S.LibraryTap>;
}

const S = {
  LibraryTap: styled.div`
    /* border: 1px solid red; */
    height: 35px;
  `,
};
