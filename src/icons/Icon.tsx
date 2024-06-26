import React from 'react';
import styled, { css } from 'styled-components';
import * as svg from './svg';

export type IconType = keyof typeof svg;

export type IconProps = {
  name: IconType;
  className?: string;
  TosIcon?: boolean;
  onClick?: any;
  style?: React.CSSProperties | undefined;
};

function Icon({ name, className, style, onClick }: IconProps) {
  return React.createElement(svg[name], {
    className,
    style,
    onClick,
  });
}

export default styled(Icon)`
  width: 30px;
  color: ${props => props.theme.colors.base};
  cursor: pointer;
  fill: currentColor;
`;
