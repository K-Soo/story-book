import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader';

interface ISpinners {
  size?: number;
  position?: 'absolute' | 'fixed';
}

export default function Spinners({ size, position }: ISpinners) {
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <S.Spinners position={position}>
      <PulseLoader color='#999' loading={true} cssOverride={override} size={size} speedMultiplier={0.5} />
    </S.Spinners>
  );
}

const S = {
  Spinners: styled.div<{ position?: string }>`
    z-index: 1;
    margin: 0 auto;
    text-align: center;
    background-color: red;
    ${props =>
      props.position === 'absolute' &&
      css`
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
      `}
  `,
};
