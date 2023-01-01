import React from 'react';
import AuthContainer from '@containers/authContainer';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useLoading from '@hooks/useLoading';
import Spinners from '@components/common/Spinners';

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useLoading(true);

  React.useEffect(() => {
    getSession().then(session => {
      if (session) {
        router.replace('/');
      } else {
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinners position='absolute' />;
  }

  return <AuthContainer />;
}

SignInPage.getLayout = (page: React.ReactElement) => {
  return <>{page}</>;
};
