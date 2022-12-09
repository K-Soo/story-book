import styled from 'styled-components';

interface IEmptyText {
  text?: string;
}

const DEFAULT_TEXT = '데이터가 없습니다.';

export default function EmptyText({ text = DEFAULT_TEXT }: IEmptyText) {
  return (
    <S.EmptyText>
      <p>{text}</p>
    </S.EmptyText>
  );
}

const S = {
  EmptyText: styled.div`
    text-align: center;
    margin: 50px 0;
  `,
};
