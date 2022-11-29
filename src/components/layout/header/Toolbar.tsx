import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from 'src/icons/Icon';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
// import { Search, User, ArrowLeft } from 'src/icons/svg';
import SvgIcon from 'src/icons/SvgIcon';

export default function Toolbar() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();

  return (
    <S.Toolbar>
      {!loading && (
        <ul className='list'>
          <li className='list__item'>
            <div className='list__item--go-back'>{router.pathname !== '/' && <i>{/* <ArrowLeft onClick={() => router.back()} /> */}</i>}</div>
          </li>
          <li className='list__item'>
            <div className='list__item--banner'>
              <Image src='/images/logo/main_logo.png' alt='메인 로고' width={35} height={35} />
            </div>
          </li>
          {session && (
            <li className='list__item'>
              {session.user?.image === undefined ? (
                // <User />
                <div>user</div>
              ) : (
                <div className='list__item--profile'>
                  <Image
                    src={session.user?.image as string}
                    alt='profile image'
                    width={35}
                    height={35}
                    // layout='fill'
                    // objectFit="cover"
                  />
                </div>
              )}
            </li>
          )}
          {!session && (
            <li className='list__item'>
              <div className='list__item--login'>
                <Link href='/sign-in'>SIGN-IN/LOGIN</Link>
              </div>
            </li>
          )}
        </ul>
      )}
    </S.Toolbar>
  );
}

const S = {
  Toolbar: styled.div`
    height: 40px;
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      &__item {
        flex: 33%;
        height: 100%;
        &--go-back {
          display: flex;
          align-items: center;
          height: 100%;
          i {
            svg {
              height: 20px;
              width: 20px;
            }
          }
        }
        &--profile {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 0;
          cursor: pointer;
          img {
            border-radius: 50%;
          }
        }
        &--login {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          a {
            font-size: 14px;
          }
        }
        &--banner {
          text-align: center;
          cursor: pointer;
        }

        &--search {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 0;
          text-align: right;
          cursor: pointer;
        }
      }
      ${props => props.theme.mobile`
        &__item{
          &--profile{
            display: none;
          }
        }
      `};
    }
  `,
};
