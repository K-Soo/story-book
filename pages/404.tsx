import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '@components/common/Button';

export default function Custom404() {
  const router = useRouter();

  return (
    <StyledCustom404>
      <article className='wrapper'>
        <h1 className='wrapper__title'>404</h1>
        <p className='wrapper__desc'>아무것도 없어요!</p>
        <Button label='홈으로' onClick={() => router.push('/')} />
      </article>
    </StyledCustom404>
  );
}

Custom404.getLayout = function getLayout(page: React.ReactElement) {
  return <>{page}</>;
};

const StyledCustom404 = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    &__title {
      font-size: 30px;
    }
    &__desc {
    }
  }
`;
