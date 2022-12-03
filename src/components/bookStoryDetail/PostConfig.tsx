import React from 'react';
import styled from 'styled-components';

export default function PostConfig() {
  return (
    <S.PostConfig>
      <div className='postConfig-container'>
        <button className='modify'>수정</button>
        <button className='remove'>삭제</button>
      </div>
    </S.PostConfig>
  );
}

const S = {
  PostConfig: styled.div`
    height: 20px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .postConfig-container {
      .modify {
        margin-right: 15px;
      }
    }
  `,
};
