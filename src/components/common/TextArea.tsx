import React from 'react';
import styled from 'styled-components';

interface ITextArea {
  readOnly?: boolean;
  defaultValue?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({ readOnly, defaultValue, onChange }: ITextArea) {
  const textareaInput = React.useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    if (textareaInput.current) {
      textareaInput.current.style.height = 'auth';
      textareaInput.current.style.height = textareaInput.current.scrollHeight + 'px';
    }
  };

  return (
    <S.TextArea
      onChange={handleResizeHeight}
      readOnly={readOnly}
      rows={1}
      defaultValue={defaultValue}
      ref={textareaInput}
    />
  );
}

const S = {
  TextArea: styled.textarea`
    width: 100%;
    word-wrap: break-word;
    border-bottom: 1px solid #e5e8eb;
  `,
};
