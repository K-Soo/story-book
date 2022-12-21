import React from 'react';
import Auth from '@components/auth';
import SocialList from '@components/auth/SocialList';
import { Post } from 'src/api';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import useLoading from 'src/hooks/useLoading';

const initSubmitForm = {
  email: '',
  password: '',
};

export default function AuthContainer() {
  const { loading, setLoading } = useLoading();
  const router = useRouter();
  const [submitForm, setSubmitForm] = React.useState(initSubmitForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubmitForm({ ...submitForm, [name]: value });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (router.pathname === '/sign-up') {
        const response = await Post.createUser({ ...submitForm, test: 'test2' });
        console.info('회원가입 API : ', response);
        if (response.status === 200) router.replace('/');
      }
      if (router.pathname === '/sign-in') {
        const result = await signIn('credentials', {
          redirect: false,
          email: submitForm.email,
          password: submitForm.password,
        });
        console.log('result: ', result);
        // if (result?.error) {
        //   router.replace('/');
        // };

        if (!result?.error) {
          router.replace('/');
        }
      }
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Auth onChange={handleChange} onSubmitHandler={onSubmitHandler} submitForm={submitForm}>
      <SocialList />
    </Auth>
  );
}
