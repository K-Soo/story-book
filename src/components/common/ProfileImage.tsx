import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

interface IProfileImage {
  image?: string;
  width?: number;
  height?: number;
  margin?: string;
}

export default function ProfileImage({ image, width, height, margin }: IProfileImage) {
  const { data: session } = useSession();

  return (
    <S.ProfileImage width={width} height={height} margin={margin}>
      <Image
        src={image ? image : session ? (session?.user?.image as string) : '/images/logo/main_logo.png'}
        alt='프로필 이미지'
        // width={width ?? 35}
        // height={height ?? 35}
        layout='fill'
        // objectFit='cover'
        objectFit='contain'
      />
    </S.ProfileImage>
  );
}

const S = {
  ProfileImage: styled.div<{ width?: number; height?: number; margin?: string }>`
    width: ${props => (props.width ? `${props.width}px` : '35px')};
    height: ${props => (props.height ? `${props.height}px` : '35px')};
    margin: ${props => (props.margin ? props.margin : '0')};
    position: relative;
    font-size: 0;
    border-radius: 50%;
    border: 0.2px solid #888;
    img {
      border-radius: 50%;
    }
  `,
};
