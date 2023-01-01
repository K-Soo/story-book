import styled from 'styled-components';
import Icon from 'src/icons/Icon';
import { useRouter } from 'next/router';

export default function GoBack() {
  const router = useRouter();

  return <S.GoBack>{router.pathname !== '/' && <Icon name='ArrowLeft' onClick={() => router.back()} />}</S.GoBack>;
}

const S = {
  GoBack: styled.div`
    flex: 1;
  `,
};
