import React from 'react';
import AuthContainer from '@containers/authContainer';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useLoading from '@hooks/useLoading';

export default function SignInPage() {
  const router = useRouter();
  const { loading, setLoading } = useLoading(true);
  console.log('loading: ', loading);

  React.useEffect(() => {
    getSession().then(session => {
      console.log('session: ', session);
      if (session) {
        router.replace('/');
      } else {
        // setLoading(false);
      }
    });
  }, [router, setLoading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <AuthContainer />;
}

SignInPage.getLayout = (page: React.ReactElement) => {
  return <>{page}</>;
};
