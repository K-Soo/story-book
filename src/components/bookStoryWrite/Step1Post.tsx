import styled from 'styled-components';
import AddBook from '@components/bookStoryWrite/AddBook';
import Button from '@components/common/Button';

interface IStep1Post {
  children: React.ReactNode;
}

export default function Step1Post({ children }: IStep1Post) {
  return (
    <S.Step1Post>
      <AddBook />
      {children}
    </S.Step1Post>
  );
}

const S = {
  Step1Post: styled.div``,
};
