import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Search, User, Book, Home } from 'src/icons/svg';
import SvgIcon from 'src/icons/SvgIcon';
import { useRouter } from 'next/router';

interface IMenuList {
  className: string;
}

export default React.memo(function MenuList({ className }: IMenuList) {
  const router = useRouter();

  return (
    <S.MenuList className={className}>
      <ul className='list'>
        <li className='list__item'>
          <Link href='/' passHref>
            <a>
              <Home />
              {/* <SvgIcon /> */}
              <span className='list__item--label'>홈</span>
            </a>
          </Link>
        </li>

        <li className='list__item' onClick={() => router.push('/search')}>
          <Search />
          <span className='list__item--label'>검색</span>
        </li>

        <li className='list__item'>
          <Link href='/book-story' passHref replace>
            <a>
              <Book />
              <span className='list__item--label'>북스토리</span>
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
