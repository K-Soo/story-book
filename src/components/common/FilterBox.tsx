import React from 'react';
import styled from 'styled-components';
import Icon from 'src/icons/Icon';
import { TDisplayTypes } from '@containers/bookStoryContainer';

interface IFilterBox {
  displayType: TDisplayTypes;
  handleChangeSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeDisplay: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FilterBox({ handleChangeSort, handleChangeDisplay, displayType }: IFilterBox) {
  return (
    <S.FilterBox>
      {displayType === 'VERTICAL' ? (
        <Icon name='LayoutHorizontal' onClick={handleChangeDisplay} />
      ) : (
        <Icon name='LayoutTable' onClick={handleChangeDisplay} />
      )}
      <div className='wrapper'>
        <select className='wrapper__select' onChange={handleChangeSort}>
          <option value='DESC'>최신순</option>
          <option value='ASC'>오래된순</option>
        </select>
        <Icon name='BottomArrow1' style={{ height: '24px', width: '24px' }} />
      </div>
    </S.FilterBox>
  );
}

const S = {
  FilterBox: styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      position: relative;
      border: 1px solid #888;
      &__select {
        all: unset;
        z-index: 1;
        cursor: pointer;
        width: 70px;
        padding: 5px;
        font-size: 13px;
      }
      svg {
        position: absolute;
        right: 0;
        pointer-events: none;
      }
    }
    img {
      width: 50px;
      height: 50px;
    }
  `,
};
