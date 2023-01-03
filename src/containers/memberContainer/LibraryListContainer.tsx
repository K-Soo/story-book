import styled from 'styled-components';
import LibraryList from '@components/member/libraryList';
import Continue from '@components/common/Continue';
import LibraryTap from '@components/member/libraryList/LibraryTap';

interface ILibraryListContainer {}

export default function LibraryListContainer({}: ILibraryListContainer) {
  return (
    <S.LibraryListContainer>
      <LibraryTap />
      <Continue href='/member/previews' />

      <LibraryList />
    </S.LibraryListContainer>
  );
}

const S = {
  LibraryListContainer: styled.div``,
};
