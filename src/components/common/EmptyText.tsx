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
    width: 100%;
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    font-weight: 600;
  `,
};
