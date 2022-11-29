import React from 'react';
import styled from 'styled-components';

interface IButton {
  margin?: string;
  label: string;
  color?: string;
  width?: string;
  backGround?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default function Button({ label, type, margin, onClick, color, width, backGround }: IButton) {
  return (
    <S.Button type={type ?? 'button'} margin={margin} color={color} width={width} backGround={backGround} onClick={onClick}>
      {label}
    </S.Button>
  );
}

const S = {
  Button: styled.button<{ margin?: string; color?: string; width?: string; backGround?: string }>`
    background-color: ${props => props.theme.colors.base};
    margin: ${props => (props.margin ? props.margin : '0')};
    /* background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%); */
    background-color: ${props => (props.backGround ? props.backGround : props.backGround)};
    color: ${props => (props.color ? props.color : '#fff')};
    height: 40px;
    border-radius: 5px;
    width: ${props => (props.width ? props.width : '100%')};
    &:hover {
      transition: all 0.3s;
      box-shadow: 0 2px 2px 0 rgb(156 39 176 / 14%), 0 3px 1px -2px rgb(156 39 176 / 20%), 0 1px 5px 0 rgb(156 39 176 / 12%);
    }
  `,
};
