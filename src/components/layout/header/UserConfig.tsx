import styled from 'styled-components';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from 'src/icons/Icon';
interface IUserConfig {}

export default function UserConfig({}: IUserConfig) {
  const { data: session, status } = useSession();

  return (
    <S.UserConfig>
      {!session && (
        <span className='account'>
          <Link href='/sign-in'>SIGN-IN / LOGIN</Link>
        </span>
      )}
      {session && (
        <>
          <div className='img'>
            {session.user?.image === undefined ? (
              <Icon name='User' />
            ) : (
              <Image
                src={session.user?.image as string}
                alt='profile image'
                width={35}
                height={35}
                objectFit='contain'
              />
            )}
          </div>
        </>
      )}
    </S.UserConfig>
  );
}

const S = {
  UserConfig: styled.div`
    flex: 1;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    .account {
      font-size: 13px;
      font-weight: 500;
      color: #888;
    }
    .img {
      width: 35px;
      height: 35px;
      font-size: 0;
      border-radius: 50%;
      background-color: #000;
      overflow: hidden;
      border: 0.5px solid #f5f5f5;
    }
  `,
};
