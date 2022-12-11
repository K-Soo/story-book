import styled from 'styled-components';
import CommentCountSection from '@components/bookStoryDetailComment/CommentCountSection';
import CommentWrite from '@components/bookStoryDetailComment/CommentWrite';
import HorizontalLine from '@components/common/HorizontalLine';

interface IBookStoryDetailComment {}

export default function BookStoryDetailComment({}: IBookStoryDetailComment) {
  return (
    <S.BookStoryDetailComment>
      <CommentCountSection />
      <HorizontalLine height='1px' />
      <CommentWrite />
    </S.BookStoryDetailComment>
  );
}

const S = {
  BookStoryDetailComment: styled.div``,
};
