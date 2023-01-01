import styled from 'styled-components';
import LibraryList from '@components/member/libraryList';

interface ILibraryListContainer {}

export default function LibraryListContainer({}: ILibraryListContainer) {
  return (
    <S.LibraryListContainer>
      <LibraryList />
    </S.LibraryListContainer>
  );
}

const S = {
  LibraryListContainer: styled.div``,
};
