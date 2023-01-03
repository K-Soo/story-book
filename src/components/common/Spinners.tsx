import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader';

interface ISpinners {
  size?: number;
  position?: 'absolute' | 'fixed';
  isInner?: boolean;
}

export default function Spinners({ size, position, isInner }: ISpinners) {
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <S.Spinners position={position} isInner={isInner}>
      <PulseLoader color='#999' loading={true} cssOverride={override} size={size} speedMultiplier={0.5} />
    </S.Spinners>
  );
}

const S = {
  Spinners: styled.div<{ position?: string; isInner?: boolean }>`
    z-index: 1;
    margin: 0 auto;
    text-align: center;
    ${props =>
      props.isInner &&
      css`
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.3);
      `}
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
