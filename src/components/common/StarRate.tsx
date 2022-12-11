import React from 'react';
import styled from 'styled-components';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { BookStoryFormValue } from '@types';
import { useFormContext, Controller } from 'react-hook-form';
interface IStarRate {
  value: number;
  disabled?: boolean;
  margin?: string;
}

export default function StarRate({ value, disabled, margin }: IStarRate) {
  const { control } = useFormContext<BookStoryFormValue>();

  return (
    <S.StarRate margin={margin}>
      <Controller
        control={control}
        name='rate'
        render={({ field: { onChange, value } }) => {
          return <StyledRate allowHalf value={value} disabled={disabled} onChange={onChange} />;
        }}
      />
    </S.StarRate>
  );
}

const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: 20px;
  }
  .rc-rate-star-half .rc-rate-star-first,
  .rc-rate-star-full .rc-rate-star-second {
    /* color: var(--active) !important; */
  }
  .rc-rate-star.rc-rate-star-zero {
    /* opacity: 0.1; */
  }
  .rc-rate-star .rc-rate-star-full {
    /* opacity: 1; */
  }
`;

const S = {
  StarRate: styled.div<{ margin?: string }>`
    margin: ${props => props.margin && props.margin};
    overflow: hidden;
  `,
};
