import styled from 'styled-components';

export default function HorizontalBar() {
  return <S.HorizontalBar />;
}

const S = {
  HorizontalBar: styled.div`
    width: 100%;
    height: 8px;
    border-top: 1px solid #ececec;
    background-color: #f9f9f9;
  `,
};
