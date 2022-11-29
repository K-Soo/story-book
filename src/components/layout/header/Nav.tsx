import React from "react";
import styled, { css } from "styled-components";
import Link from 'next/link';
import { useRouter } from 'next/router';


const MENU_DATA = [
  { label: '홈', path: '/' },
  { label: '책', path: '/books' },
  { label: '스토리북', path: '/book-story' },
] as const;

export default function Nav() {
  const router = useRouter();

  return (
    <S.Nav>
      <ul className='pc-nav'>
        {MENU_DATA.map((el) => (
          <S.ListItem
            key={el.path}
            active={router.pathname === el.path}
          >
            <Link href={el.path}>{el.label}</Link>
          </S.ListItem>
        ))}
      </ul>
    </S.Nav>
  );
};

const S = {
  Nav: styled.nav`
    height: 40px;
    .pc-nav{
      display: flex;
      align-items: center;
      height: 100%;
    }
    ${props => props.theme.mobile`
      display: none;
    `};
  `,
  ListItem: styled.li<{ active: boolean }>`
    flex: 1;
    height: 100%;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    a{
      width: 100%;
      cursor: pointer;
      &:hover{
      color: #FE6b8B;
      }
    }
    ${props => props.active && css`
      color: #FE6b8B;
      border-bottom: 1px solid #FE6b8B;
    `};
  `,
};
