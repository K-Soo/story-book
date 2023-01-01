import { IPostCardTypes } from '@types';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IPreviewCard {
  item: {
    postId: IPostCardTypes;
    createdAt: string;
  };
}

export default function PreviewCard({ item }: IPreviewCard) {
  console.log('item: ', item);
  const router = useRouter();
  return (
    <S.PreviewCard onClick={() => router.push(`/book-story/${item.postId._id}`)}>
      <div className='image'>
        <Image src={item.postId.bookInfo?.image} objectFit='cover' layout='fill' alt='post' />
      </div>
      <div className='desc'>
        <h1 className='desc__title'>{item.postId.title}</h1>
        <div className='desc__user-info'></div>
      </div>
    </S.PreviewCard>
  );
}

const S = {
  PreviewCard: styled.div`
    flex: 1 1 45%;
    max-width: 45%;
    height: 100px;
    margin: 5px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    cursor: pointer;
    .image {
      position: relative;
      flex: 1 1 35%;
      margin-right: 15px;
    }
    .desc {
      display: flex;
      flex-direction: column;
      width: 100%;
      &__title {
        font-size: 14px;
      }
    }
  `,
};
