import React from 'react';
import { ThemeProvider } from 'styled-components';
import Media from './Media';
interface ITheme {
  children: React.ReactNode;
}

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  green: '#008000',
  red: '#f44336',
  pink: '#ff5277',
  backGround: '#F8F9FA',
  base: '#D9B9A3',
};

export default function Theme({ children }: ITheme) {
  return (
    <ThemeProvider
      theme={{
        ...Media,
        colors,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
