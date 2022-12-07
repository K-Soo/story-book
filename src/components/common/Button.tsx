import React from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  margin?: string;
  label: string;
  color?: string;
  width?: string;
  backGround?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default function Button({
  label,
  type = 'button',
  margin,
  onClick,
  color,
  width,
  backGround,
  disabled = false,
}: IButton) {
  return (
    <S.Button
      type={type}
      disabled={disabled}
      margin={margin}
      color={color}
      width={width}
      backGround={backGround}
      onClick={onClick}
    >
      {label}
    </S.Button>
  );
}

const S = {
  Button: styled.button<{ margin?: string; color?: string; width?: string; backGround?: string; disabled?: boolean }>`
    margin: ${props => (props.margin ? props.margin : '0')};
    background-color: ${props => (props.backGround ? props.backGround : props.theme.colors.base)};
    ${props =>
      props.disabled &&
      css`
        background-color: ${props => props.theme.colors.disabled};
      `};
    color: ${props => (props.color ? props.color : '#fff')};
    width: ${props => (props.width ? props.width : '100%')};
    cursor: ${props => (!props.disabled ? 'pointer' : 'default')};
    height: 40px;
    border-radius: 5px;
    &:hover {
      transition: all 0.3s;
      box-shadow: 0 2px 2px 0 rgb(156 39 176 / 14%), 0 3px 1px -2px rgb(156 39 176 / 20%),
        0 1px 5px 0 rgb(156 39 176 / 12%);
    }
  `,
};
