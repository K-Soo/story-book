import React from 'react';
import { useRouter } from 'next/router';
import User from '@components/user';
import { useSession } from 'next-auth/react';

export default function UserContainer() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const loading = status === 'loading';

  if (!loading && !session) {
    router.push('/sign-in');
  }

  return (
    <React.Fragment>
      <User />
    </React.Fragment>
  );
}
