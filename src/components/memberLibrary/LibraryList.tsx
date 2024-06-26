import styled from 'styled-components';
import useQueryLibraryList from '@reactQuery/useQueryLibraryList';

interface ILibraryList {}

function LibraryList(props: { test?: string }) {
  // const { data, isSuccess, isLoading, isError } = useQueryLibraryList();
  // console.log('isError: ', isError);

  return <S.LibraryList>LibraryList</S.LibraryList>;
}

const S = {
  LibraryList: styled.div`
    height: 500px;
    border: 1px solid red;
  `,
};

export default LibraryList;
