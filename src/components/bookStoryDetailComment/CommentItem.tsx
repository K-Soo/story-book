import React from 'react';
import styled from 'styled-components';
import ProfileImage from '@components/common/ProfileImage';
import TextArea from '@components/common/TextArea';
import moment from 'moment';

interface ICommentItem {
  item: any;
}

export default function CommentItem({ item }: ICommentItem) {
  const deferredContent = React.useDeferredValue(item.content);
  const [content, setContent] = React.useState(deferredContent);

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
          <span>ICON</span>
        </div>
        <div className='bottom'>
          {/* <TextArea readOnly defaultValue={deferredContent} onChange={onChange} value={content} /> */}
          <div className='bottom__button-box'>
            <button>모모</button>
            <button>다이</button>
          </div>
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
