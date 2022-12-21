import React from 'react';
import styled, { css } from 'styled-components';

interface ITextArea {
  readOnly: boolean;
  defaultValue?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
}

export default function TextArea({ readOnly, defaultValue, onChange, value }: ITextArea) {
  const textareaInput = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (textareaInput.current) {
      textareaInput.current.style.height = textareaInput.current.scrollHeight + 'px';
    }
  }, []);

  const handleResizeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    if (textareaInput.current) {
      textareaInput.current.style.height = textareaInput.current.scrollHeight + 'px';
    }
  };

  return (
    <S.TextArea
      onChange={handleResizeHeight}
      readOnly={readOnly}
      rows={1}
      defaultValue={defaultValue}
      value={value}
      ref={textareaInput}
      placeholder='댓글 작성'
    />
  );
}

const S = {
  TextArea: styled.textarea<{ readOnly?: boolean }>`
    width: 100%;
    word-wrap: break-word;
    ${props =>
      props.readOnly === false &&
      css`
        border-bottom: 1px solid #e5e8eb;
      `};
  `,
};
