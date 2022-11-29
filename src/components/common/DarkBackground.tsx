import React from 'react';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
interface IDarkBackground {
  children: React.ReactNode;
}

export default function DarkBackground({ children }: IDarkBackground) {
  React.useEffect(() => {
    const targetElement = document.querySelector('body') as HTMLBodyElement;
    disableBodyScroll(targetElement);
    return () => clearAllBodyScrollLocks();
  }, []);

  return <S.DarkBackground>{children}</S.DarkBackground>;
}

const S = {
  DarkBackground: styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    /* -ms-overflow-style: none; */
    /* scrollbar-width: none;  */
  `,
};
