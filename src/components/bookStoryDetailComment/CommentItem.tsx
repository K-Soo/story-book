import React from 'react';
import styled from 'styled-components';
import ProfileImage from '@components/common/ProfileImage';
import TextArea from '@components/common/TextArea';
import moment from 'moment';
import Button from '@components/common/Button';
import { useSession } from 'next-auth/react';
import { TSessionTypes } from 'pages/api/auth/[...nextauth]';

interface ICommentItem {
  item: any;
}

export default function CommentItem({ item }: ICommentItem) {
  const deferredContent = React.useDeferredValue(item.content);
  const [content, setContent] = React.useState(deferredContent);
  const [isReadOnly, setIsReadOnly] = React.useState(true);
  const { data: session }: { data: TSessionTypes | null } = useSession();

  const onChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onClickCancelUpdate = () => {
    setIsReadOnly(true);
    setContent(deferredContent);
  };

  return (
    <S.CommentItem>
      <ProfileImage image={item.author.image} />
      <div className='container'>
        <div className='top'>
          <div className='top__info'>
            <p className='top__info--name'>{item.author.name}</p>
            <p className='top__info--date'>{moment(item.createdAt).format('YYYY.MM.DD')}</p>
          </div>
          {session && item.author._id === session?.user?.id && (
            <div className='top__update'>
              <button onClick={() => setIsReadOnly(prev => !prev)}>수정</button>
              <button>삭제</button>
            </div>
          )}
        </div>
        <div className='bottom'>
          <TextArea readOnly={isReadOnly} defaultValue={deferredContent} onChange={onChange} value={content} />
          {!isReadOnly && (
            <div className='bottom__button-box'>
              <Button label='취소' onClick={() => onClickCancelUpdate()} />
              <Button label='수정완료' />
            </div>
          )}
        </div>
      </div>
    </S.CommentItem>
  );
}

const S = {
  CommentItem: styled.article`
    padding: 0 10px;
    display: flex;
    margin-bottom: 50px;
    .container {
      margin-left: 10px;
      width: 100%;
      .top {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        &__info {
          display: flex;
          &--name {
            margin-right: 10px;
          }
        }
        &__update {
          button {
            color: ${props => props.theme.colors.gray1};
            cursor: pointer;
            font-size: 12px;
            :hover {
              text-decoration: underline;
            }
          }
          button:first-child {
            margin-right: 8px;
          }
        }
      }
      .bottom {
        &__content {
          border: 1px solid #aaa;
          width: 100%;
        }
        &__button-box {
          margin-top: 5px;
          display: flex;
          justify-content: space-between;
          button {
            width: 60px;
            height: 25px;
            font-weight: 400;
            font-size: 13px;
          }
        }
      }
    }
  `,
};
