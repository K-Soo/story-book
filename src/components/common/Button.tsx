import React from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  className?: string;
  margin?: string;
  label: string;
  color?: string;
  width?: string;
  backGround?: string;
  disabled?: boolean;
  fontSize?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default function Button({
  label,
  type = 'button',
  margin,
  onClick,
  color,
  width,
  className,
  backGround,
  fontSize,
  children,
  disabled = false,
}: IButton) {
  return (
    <S.Button
      className={className}
      type={type}
      margin={margin}
      disabled={disabled}
      fontSize={fontSize}
      color={color}
      width={width}
      backGround={backGround}
      onClick={onClick}
    >
      {children}
      {label}
    </S.Button>
  );
}

const S = {
  Button: styled.button<{
    margin?: string;
    color?: string;
    width?: string;
    backGround?: string;
    fontSize?: string;
  }>`
    background-color: ${props => (props.backGround ? props.backGround : props.theme.colors.base)};
    margin: ${props => (props.margin ? props.margin : '0')};
    color: ${props => (props.color ? props.color : '#fff')};
    width: ${props => (props.width ? props.width : '100%')};
    cursor: ${props => (!props.disabled ? 'pointer' : 'default')};
    font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
    height: 40px;
    border-radius: 5px;
    font-weight: 600;
    &:disabled {
      background-color: ${({ theme }) => theme.colors.disabled};
    }
  `,
};
