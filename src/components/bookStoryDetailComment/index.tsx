import styled from 'styled-components';
import CommentCountSection from '@components/bookStoryDetailComment/CommentCountSection';
import HorizontalLine from '@components/common/HorizontalLine';

interface IBookStoryDetailComment {
  children: React.ReactNode;
}

export default function BookStoryDetailComment({ children }: IBookStoryDetailComment) {
  return (
    <S.BookStoryDetailComment>
      <CommentCountSection />
      <HorizontalLine height='1px' />
      {children}
    </S.BookStoryDetailComment>
  );
}

const S = {
  BookStoryDetailComment: styled.div``,
};
