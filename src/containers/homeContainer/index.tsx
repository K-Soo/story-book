import React from 'react';
import Home from '@components/home';
import axios, { AxiosRequestHeaders } from 'axios';

export default function HomeContainer() {
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //         const res = await axios.get('/api/books');
  //       console.log('책 검색 API : ', res);
  //     } catch (error) {
  //       console.log('error: ', error);
  //     }
  //   })();
  //   console.log('asdsadas');
  // }, []);

  return <Home />;
}
