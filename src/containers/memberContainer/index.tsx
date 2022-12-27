import React from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import LibraryContainer from '@containers/memberContainer/libraryContainer';
import PostPreviewContainer from '@containers/memberContainer/postPreviewContainer';
import Member from '@components/member';
import Button from '@components/common/Button';
import HorizontalBar from '@components/common/HorizontalBar';
import MemberTap from '@components/member/MemberTap';
import Profile from '@components/member/Profile';
import Spinners from '@components/common/Spinners';
import dynamic from 'next/dynamic';
import PreviewListContainer from '@containers/memberContainer/PreviewListContainer';

// const PostPreviewContainer = dynamic(() => import('@containers/memberContainer/postPreviewContainer'), { ssr: false });

// const PostPreviewContainer = React.lazy(() => import('@containers/memberContainer/postPreviewContainer'));

export type TSectionTypes = 'PROFILE' | 'LIBRARY';

export default function MemberContainer() {
  const [section, setSection] = React.useState<TSectionTypes>('PROFILE');
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== 'loading' && !session) {
    router.push('/sign-in');
  }

  function onClickLogOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    signOut();
  }

  const handleClickSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setSection(value as TSectionTypes);
  };

  return (
    <>
      <Member>
        <MemberTap handleClickSection={handleClickSection} section={section} />
        <Profile />
      </Member>
      {/* {section === 'PROFILE' && (
        <React.Suspense fallback={<Spinners />}>
          <PostPreviewContainer />
        </React.Suspense>
      )}
      {section === 'LIBRARY' && <LibraryContainer />} */}
      <PreviewListContainer />
      <HorizontalBar />
      <Button label='로그아웃' onClick={onClickLogOut} />
    </>
  );
}
