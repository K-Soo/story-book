import styled from 'styled-components';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

interface IProfile {}

export default function Profile({}: IProfile) {
  const { data: session, status } = useSession();
  console.log('session: ', session);

  return (
    <S.Profile>
      <div className='image-box'>
        {/* <Image src={session?.user?.image as string} objectFit='contain' width='60' height='60' alt='프로필 이미지' /> */}
      </div>
      <div className='content-box'>
        <strong>{session?.user?.name}</strong>
      </div>
    </S.Profile>
  );
}

const S = {
  Profile: styled.article`
    height: 100px;
    border: 1px solid red;
    display: flex;
    .image-box {
      border: 1px solid red;
      img {
        /* border: 1px solid red; */
      }
    }
  `,
};
