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
        <Image
          className='image'
          src={(session?.user?.image as string) ?? '/images/user.png'}
          objectFit='contain'
          width='50'
          height='50'
          alt='프로필 이미지'
        />
      </div>
      <div className='content-box'>
        <strong className='content-box__name'>{session?.user?.name ?? session?.user?.email}</strong>
      </div>
    </S.Profile>
  );
}

const S = {
  Profile: styled.article`
    padding: 0 10px;
    display: flex;
    .image-box {
      position: relative;
      width: 50px;
      height: 50px;
      overflow: hidden;
      margin-right: 15px;
      border-radius: 30%;
    }
    .content-box {
      &__name {
        display: inline-block;
        margin-top: 5px;
        font-weight: 600;
      }
    }
  `,
};
