import React from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

interface IRecentSearch {}

export default function RecentSearch({}: IRecentSearch) {
  return (
    <S.RecentSearch>
      <h6 className="title">최근검색어</h6>
      <ScrollContainer className="scroll-container" vertical={false} horizontal={true} hideScrollbars={true}>
        <div>1111</div>
        <div>333</div>
        <div>444</div>
        <div>555</div>
        <div>666</div>
        <div>777</div>
        <div>888</div>
        <div>999</div>
      </ScrollContainer>
    </S.RecentSearch>
  );
}

const S = {
  RecentSearch: styled.div`
    margin-top: 10px;
    .title {
      margin-bottom: 10px;
    }
    .scroll-container {
      display: flex;
      cursor: pointer;
    }
  `,
};
