import React from 'react';
import styled from 'styled-components';
import ProfileImage from '@components/common/ProfileImage';
import Button from '@components/common/Button';
import LoginOnlyCover from '@components/common/LoginOnlyCover';
import { useSession } from 'next-auth/react';

interface ICommentWrite {}

export default function CommentWrite({}: ICommentWrite) {
  const { data: session } = useSession();

  return (
    <S.CommentWrite>
      {!session && <LoginOnlyCover />}
      <ProfileImage />
      <div className='text-box'>
        <textarea className='text-box__area' />
        <div className='text-box__button-wrapper'>
          <Button label='취소' margin='0 15px 0 0' />
          <Button label='등록' />
        </div>
      </div>
    </S.CommentWrite>
  );
}

const S = {
  CommentWrite: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    width: 100%;
    padding: 0 10px;
    .text-box {
      margin-left: 15px;
      flex: 1;
      &__area {
        width: 100%;
        border-bottom: 1px solid #e5e8eb;
        word-wrap: break-word;
        /* min-height: 30px; */
        height: auto;
      }
      &__button-wrapper {
        margin-top: 5px;
        display: flex;
        justify-content: flex-end;
        button {
          height: 30px;
          width: 70px;
        }
      }
    }
  `,
};
