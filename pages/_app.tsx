import React from 'react';
import Head from 'next/head';
import Theme from 'styles/Theme';
import Layout from '@components/layout';
import wrapper from '@store';
import GlobalStyle from 'styles/GlobalStyle';
import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import { useAppSelector } from '@store';
import { Session } from 'next-auth';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'src/reactQuery/queryClient';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import type { AppProps } from 'next/app';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

type NextPageWithLayout = NextPage & {
  getLayout: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout<T> = AppProps<T> & {
  Component: NextPageWithLayout;
};

// prettier-ignore
function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout<{ session: Session }>) {
  const router = useRouter();
  const { store, props } = wrapper.useWrappedStore(pageProps);
  
  React.useEffect(() => storePathValues, [router.asPath]);
    

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath as string);
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  function commonLayout(page:React.ReactElement) {
    return <Layout>{page}</Layout>}

    const getLayout = Component.getLayout ?? commonLayout

  return (
    <React.Fragment>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"/>
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SessionProvider session={session}>
            <GlobalStyle />
            <Theme>
              {getLayout(<Component {...pageProps} />)}
              <ToastContainer
                position="top-center"
                autoClose={800}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                limit={1}
                pauseOnHover
                theme='light'
              />
            </Theme>
          </SessionProvider>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
