import React from 'react';
import styled from 'styled-components';

interface IHorizontalLine {
  height?: string;
}

export default function HorizontalLine({ height }: IHorizontalLine) {
  return <S.HorizontalLine height={height} />;
}

const S = {
  HorizontalLine: styled.div<{ height?: string }>`
    height: ${props => (props.height ? props.height : '4px')};
    background-color: #e5e8eb;
  `,
};
