import styled from 'styled-components';

export default function HorizontalBar({ margin }: { margin?: string }) {
  return <S.HorizontalBar margin={margin} />;
}

const S = {
  HorizontalBar: styled.div<{ margin?: string }>`
    margin: ${props => (props.margin ? props.margin : '0')};
    width: 100%;
    height: 8px;
    border-top: 1px solid #ececec;
    background-color: #f9f9f9;
  `,
};
