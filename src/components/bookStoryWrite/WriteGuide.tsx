import React from 'react';
import styled from 'styled-components';

export default function WriteGuide() {
  return (
    <S.WriteGuide>
      <div>
        <p>작성가이드</p>
      </div>
    </S.WriteGuide>
  );
}

const S = {
  WriteGuide: styled.div`
    height: 50px;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
  `,
};
