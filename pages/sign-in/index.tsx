import React from 'react';
import AuthContainer from '@containers/authContainer';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useLoading from 'src/hooks/useLoading';

export default function SignInPage() {
  const router = useRouter();
  const { loading, setLoading } = useLoading(true);

  React.useEffect(() => {
    getSession().then(session => {
      if (session) {
        router.replace('/');
      } else {
        setLoading(false);
      }
    });
  }, [router, setLoading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <AuthContainer />;
}