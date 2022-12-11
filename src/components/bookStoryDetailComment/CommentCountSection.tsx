import styled from 'styled-components';

interface ICommentCountSection {}

export default function CommentCountSection({}: ICommentCountSection) {
  return (
    <S.CommentCountSection>
      <p>댓글 30</p>
      <button>댓글 모두보기</button>
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
