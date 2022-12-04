import React from 'react';
import AuthContainer from '@containers/authContainer';

export default function SignUpPage() {
  return <AuthContainer />;
}

SignUpPage.getLayout = (page: React.ReactElement) => {
  return <>{page}</>;
};
