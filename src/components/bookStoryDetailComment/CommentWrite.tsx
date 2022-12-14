import React from 'react';
import styled from 'styled-components';
import ProfileImage from '@components/common/ProfileImage';
import Button from '@components/common/Button';
import LoginOnlyCover from '@components/common/LoginOnlyCover';
import TextArea from '@components/common/TextArea';
import { useSession } from 'next-auth/react';

interface ICommentWrite {
  fetchCreateComment: React.FormEventHandler<HTMLFormElement>;
}

export default function CommentWrite({ fetchCreateComment }: ICommentWrite) {
  const { data: session } = useSession();
  const [text, setText] = React.useState('');

  return (
    <S.CommentWrite>
      {!session && <LoginOnlyCover />}
      <ProfileImage />
      <div className='text-box'>
        <form onSubmit={fetchCreateComment}>
          <TextArea onChange={e => setText(e.target.value)} />
          <div className='text-box__button-wrapper'>
            <Button label='취소' margin='0 15px 0 0' />
            <Button type='submit' label='등록' />
          </div>
        </form>
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
