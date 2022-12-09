import styled from 'styled-components';
import AddBook from '@components/bookStoryWrite/AddBook';
import Button from '@components/common/Button';

interface IStep1Post {
  children: React.ReactNode;
  className: string;
}

export default function Step1Post({ className, children }: IStep1Post) {
  return (
    <S.Step1Post className={className}>
      <AddBook />
      {children}
    </S.Step1Post>
  );
}

const S = {
  Step1Post: styled.div`
    /* border: 1px solid red; */
  `,
};
