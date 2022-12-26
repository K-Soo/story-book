import styled from 'styled-components';

interface ICommentCountSection {
  totalDoc: number;
}

export default function CommentCountSection({ totalDoc }: ICommentCountSection) {
  return (
    <S.CommentCountSection>
      <p>댓글 {totalDoc}</p>
    </S.CommentCountSection>
  );
}

const S = {
  CommentCountSection: styled.div`
    padding: 0 10px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
