import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

interface IProfileImage {
  image?: string;
}

export default function ProfileImage({ image }: IProfileImage) {
  const { data: session, status } = useSession();

  return (
    <S.ProfileImage>
      <Image
        src={image ? image : session ? (session?.user?.image as string) : '/images/logo/main_logo.png'}
        alt='프로필 이미지'
        width={35}
        height={35}
        // layout='fill'
        objectFit='contain'
      />
    </S.ProfileImage>
  );
}

const S = {
  ProfileImage: styled.div`
    width: 35px;
    height: 35px;
    font-size: 0;
    img {
      border-radius: 50%;
    }
  `,
};
