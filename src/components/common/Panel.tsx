import React from 'react';
import styled from 'styled-components';

interface IPanel {
  children: React.ReactNode;
}

export default function Panel({ children }: IPanel) {
  return <S.Panel>{children}</S.Panel>;
}

const S = {
  Panel: styled.div`
    border-radius: 15px;
    padding: 10px;
    background-color: ${props => props.theme.colors.white};
  `,
};
