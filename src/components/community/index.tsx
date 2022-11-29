import styled from 'styled-components';
import PostCard from '@components/community/PostCard';

interface ICommunity {
  children: React.ReactNode;
}

export default function Community({ children }: ICommunity) {
  return (
    <S.Community>
      {children}
      <PostCard />
      <PostCard />

      <PostCard />
    </S.Community>
  );
}

const S = {
  Community: styled.div`
    /* border: 1px solid #000; */
    height: 100%;
  `,
};
