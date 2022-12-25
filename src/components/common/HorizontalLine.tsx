import React from 'react';
import styled from 'styled-components';

interface IHorizontalLine {
  className?: string;
  height?: string;
  margin?: string;
}

export default React.memo(function HorizontalLine({ className, height, margin }: IHorizontalLine) {
  return <S.HorizontalLine className={className} height={height} margin={margin} />;
});

const S = {
  HorizontalLine: styled.div<{ height?: string; margin?: string }>`
    height: ${props => (props.height ? props.height : '4px')};
    margin: ${props => (props.margin ? props.margin : '0')};
    background-color: #e5e8eb;
  `,
};
