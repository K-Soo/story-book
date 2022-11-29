import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Search, User, Book, Home } from 'src/icons/svg';
import { useAppDispatch } from '@store';
import { setToggleSearchForm } from '@slice/searchSlice';

interface IMenuList {
  className: string;
}

export default React.memo(function MenuList({ className }: IMenuList) {
  const dispatch = useAppDispatch();

  return (
    <S.MenuList className={className}>
      <ul className='list'>
        <li className='list__item'>
          <Link href='/' passHref>
            <a>
              {/* <Home /> */}
              <span className='list__item--label'>홈</span>
            </a>
          </Link>
        </li>

        <li className='list__item' onClick={() => dispatch(setToggleSearchForm(true))}>
          {/* <Search /> */}
          <span className='list__item--label'>검색</span>
        </li>

        <li className='list__item'>
          <Link href='/book-story' passHref replace>
            <a>
              {/* <Book /> */}
              <span className='list__item--label'>북스토리</span>
            </a>
          </Link>
        </li>

        <li className='list__item'>
          <Link href='/community' passHref replace>
            <a>
              {/* <Book /> */}
              <span className='list__item--label'>커뮤니티</span>
            </a>
          </Link>
        </li>
        <li className='list__item'>
          <Link href='/user' passHref replace>
            <a>
              {/* <User /> */}
              <span className='list__item--label'>프로필</span>
            </a>
          </Link>
        </li>
      </ul>
    </S.MenuList>
  );
});

const S = {
  MenuList: styled.div`
    .list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      &__item {
        text-align: center;
        &--label {
          padding-top: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
        }
      }
    }
  `,
};
