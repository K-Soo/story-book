import React from 'react';
import styled from 'styled-components';
// import { LayoutTable, LayoutHorizontal } from 'src/icons/svg';
import LayoutTable from 'src/icons/svg/layoutTable.svg';
// import {ReactComponent as LayoutTable} from 'src/icons/svg/layoutTable.svg';
import Icon from 'src/icons/Icon';

export default function FilterBox() {
  return (
    <S.FilterBox>
      {/* <LayoutTable /> */}
      {/* <LayoutHorizontal /> */}
      <Icon name='LayoutHorizontal' />
      <div></div>
    </S.FilterBox>
  );
}

const S = {
  FilterBox: styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #fff;
  `,
};
