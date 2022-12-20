import React from 'react';
// import { ReactComponent as LayoutTable } from 'src/icons/svg/layoutTable.svg';
import styled from 'styled-components';
// import { LayoutTable, LayoutHorizontal } from 'src/icons/svg';
import LayoutTable from 'src/icons/svg/layoutTable.svg';
import Icon from 'src/icons/Icon';

export default function FilterBox() {
  return (
    <S.FilterBox>
      {/* <LayoutTable /> */}
      {/* <img src='/src/icons/svg/arrow-left.svg' alt='asd' /> */}
      tttt
      {/* <LayoutHorizontal /> */}
      <Icon name='LayoutHorizontal' />
      {/* <LayoutTable /> */}
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
    img {
      width: 50px;
      height: 50px;
    }
  `,
};
