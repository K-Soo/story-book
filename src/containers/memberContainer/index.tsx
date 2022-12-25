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

type TSectionTypes = 'PROFILE' | 'LIBRARY';

export default function MemberContainer() {
  const [section, setSection] = React.useState<TSectionTypes>('PROFILE');
  const { data: session, status } = useSession();
  console.log('status: ', status);
  console.log('session: ', session);
  const router = useRouter();
  const loading = status === 'loading';

  if (!loading && !session) {
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
        <MemberTap handleClickSection={handleClickSection} />
        <Profile />
      </Member>
      {section === 'PROFILE' && (
        <React.Suspense fallback={<Spinners />}>
          <PostPreviewContainer />
        </React.Suspense>
      )}
      console.log('session: ', session);
      {section === 'LIBRARY' && <LibraryContainer />}
      <HorizontalBar />
      <Button label='로그아웃' onClick={onClickLogOut} />
    </>
  );
}
