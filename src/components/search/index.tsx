import React from "react";
import styled from "styled-components";

interface ISearch {
  children: React.ReactNode;
}

export default function Search({ children }: ISearch) {
  return (
    <S.Search>
      <div className="title-box">
        <h1>검색결과</h1>
      </div>
      <div className="item">{children}</div>
    </S.Search>
  );
}

const S = {
  Search: styled.div`
    .item {
      width: 100%;
    }
  `,
};
