import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function NaverOauthCallbackPage() {
  const router = useRouter();
  const { error, code, state } = router.query;

  React.useEffect(() => {
    if (error) router.push('/');
  }, [error, router]);

  React.useEffect(() => {
    if (code && state) {
      (async () => {
        try {
          let res = await axios.post('/api/oauth/naver', { code, state });
          console.info('네이버 토큰 API : ', res);
        } catch (error) {
          console.log('xxxxxxx: ', error);
        }
      })();
    }
  }, [code, state]);

  return <div>NaverOauthCallbackPage</div>;
}
