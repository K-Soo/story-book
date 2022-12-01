import React from 'react';
import styled from 'styled-components';

export default function WriteBody() {
  return (
    <S.WriteBody>
      <div className='write-box'>
        <textarea cols={5} rows={3} wrap='on' />
      </div>
    </S.WriteBody>
  );
}

const S = {
  WriteBody: styled.div`
    background-color: ${props => props.theme.colors.white};
    height: 200px;
    .write-box {
      height: 100%;
      textarea {
        width: 100%;
        height: 100%;
        word-break: break-all;
      }
    }
  `,
};
