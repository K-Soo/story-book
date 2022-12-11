import styled from 'styled-components';

interface IComment {}

export default function Comment({}: IComment) {
  return <S.Comment>Comment</S.Comment>;
}

const S = {
  Comment: styled.div``,
};
