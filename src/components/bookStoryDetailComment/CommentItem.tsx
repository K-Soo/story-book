import React from 'react';
import styled from 'styled-components';
import ProfileImage from '@components/common/ProfileImage';
import TextArea from '@components/common/TextArea';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import { TSessionTypes } from 'pages/api/auth/[...nextauth]';

interface ICommentItem {
  item: any;
}

export default function CommentItem({ item }: ICommentItem) {
  const deferredContent = React.useDeferredValue(item.content);
  const [content, setContent] = React.useState(deferredContent);
  const { data: session }: { data: TSessionTypes | null } = useSession();
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const onChange = e => {
    setContent(e.target.value);
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
            <span onClick={() => setIsOpenModal(prev => !prev)}>ICON</span>
          )}
          {isOpenModal && (
            <StyledConfigModal>
              <li>수정</li>
              <li>삭제</li>
            </StyledConfigModal>
          )}
        </div>
        <div className='bottom'>
          <TextArea readOnly defaultValue={deferredContent} onChange={onChange} value={content} />
          <div className='bottom__button-box'>
            <button>모모</button>
            <button>다이</button>
          </div>
        </div>
      </div>
    </S.CommentItem>
  );
}

const StyledConfigModal = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: #fff;
  border: 1px solid #888;
  top: 15px;
  right: 0;
`;

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
      }
      .bottom {
        &__content {
          border: 1px solid #aaa;
          width: 100%;
        }
        &__button-box {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  `,
};
