import styled from 'styled-components';
import CommentCountSection from '@components/bookStoryDetailComment/CommentCountSection';
import HorizontalLine from '@components/common/HorizontalLine';

interface IBookStoryDetailComment {
  children: React.ReactNode;
  totalDoc: number;
}

export default function BookStoryDetailComment({ children, totalDoc }: IBookStoryDetailComment) {
  return (
    <S.BookStoryDetailComment>
      <CommentCountSection totalDoc={totalDoc} />
      <HorizontalLine height='1px' />
      {children}
    </S.BookStoryDetailComment>
  );
}

const S = {
  BookStoryDetailComment: styled.div``,
};
