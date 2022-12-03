import React from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

function RecentSearch() {
  return (
    <S.RecentSearch>
      <h6 className='title'>최근검색어</h6>
      <ScrollContainer className='scroll-container' vertical={false} horizontal={true} hideScrollbars={true}>
        <SearchLabel>
          <p className='label-name'>제목제목</p>
          <i>X</i>
        </SearchLabel>
        <SearchLabel>
          <p className='label-name'>제목제목</p>
          <i>X</i>
        </SearchLabel>
      </ScrollContainer>
    </S.RecentSearch>
  );
}

export default React.memo(RecentSearch);

const SearchLabel = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid #aaaaaa;
  display: flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: 15px;
  min-width: 60px;
  height: 25px;
  .label-name {
    color: #000000;
    font-size: 13px;
  }
`;

const S = {
  RecentSearch: styled.div`
    margin: 10px 0;
    padding: 15px 0;
    background-color: ${props => props.theme.colors.white};
    .title {
      margin-bottom: 10px;
      font-weight: 600;
      color: #222;
    }
    .scroll-container {
      display: flex;
      cursor: pointer;
    }
  `,
};
