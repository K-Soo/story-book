import styled from 'styled-components';
import Image from 'next/image';

export default function Logo() {
  return (
    <S.Logo>
      <Image src='/images/logo/main_logo.png' alt='메인 로고' width={35} height={35} />
    </S.Logo>
  );
}

const S = {
  Logo: styled.div`
    flex: 1;
    text-align: center;
  `,
};
