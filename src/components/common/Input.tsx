import React from 'react';
import styled, { css } from 'styled-components';

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | number;
  placeholder?: string;
  type?: string;
  margin?: string;
  readOnly?: boolean;
  pattern?: string;
  label?: string;
  icon?: any;
  validText?: string;
  focusing?: boolean;
}

export default function Input({ name, onChange, value, placeholder, type, margin, readOnly, pattern, label, icon, validText, focusing }: IInput) {
  const [focus, setFocus] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (focusing) {
      inputRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFocus = () => setFocus(true);

  const onBlur = () => {
    if (value) return;
    setFocus(false);
  };

  return (
    <S.Input margin={margin} focus={focus} validText={validText}>
      <div className='inner-wrapper'>
        <label className='inner-wrapper__label' htmlFor={label}>
          {label}
        </label>
        <input
          id={label}
          className='inner-wrapper__input'
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          onChange={onChange}
          value={value}
          type={type ?? 'text'}
          placeholder={placeholder}
          readOnly={readOnly}
          pattern={pattern}
          autoComplete='off'
          ref={inputRef}
        />
        {icon}
      </div>
      <p className='valid-text'>{validText}</p>
    </S.Input>
  );
}

const S = {
  Input: styled.div<{ margin?: string; focus: boolean; validText?: string }>`
    margin: 15px 0 0 0;
    .inner-wrapper {
      width: 100%;
      border-bottom: 1px solid #999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      font-size: 14px;
      padding: 0;
      height: 35px;
      ${props =>
        props.focus &&
        css`
          border-bottom: 1px solid ${props => props.theme.colors.base};
        `};
      &__label {
        position: absolute;
        font-size: 13px;
        bottom: 30%;
        color: #999;
        cursor: text;
        transition: all 0.1s ease;
        ${props =>
          props.focus &&
          css`
            color: ${props => props.theme.colors.base};
            bottom: 35px;
          `};
      }
      &__input {
        all: unset;
        width: 100%;
        background-color: #fff;
        height: 100%;
      }
    }
    .valid-text {
      color: ${props => props.theme.colors.red};
      margin-top: 5px;
      height: 15px;
      font-size: 12px;
    }
  `,
};
