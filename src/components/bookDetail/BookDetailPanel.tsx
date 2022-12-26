import React from 'react';
import styled from 'styled-components';
interface IBookDetailPanel {
  title: string;
  desc?: string;
  margin?: string;
  padding?: string;
}

export default function BookDetailPanel({ title, desc, margin, padding }: IBookDetailPanel) {
  return (
    <S.BookDetailPanel margin={margin} padding={padding}>
      {title && <h2 className='title'>{title}</h2>}
      <div className='description'>{desc}</div>
    </S.BookDetailPanel>
  );
}

const S = {
  BookDetailPanel: styled.div<{ margin?: string; padding?: string }>`
    padding: ${props => (props.padding ? props.padding : '40px 0')};
    margin: ${props => (props.margin ? props.margin : '0')};
    white-space: pre-wrap;
    background-color: #fff;
    line-height: 1.2;
    .title {
      font-size: 16px;
      color: #000;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .description {
      font-size: 14px;
    }
  `,
};
