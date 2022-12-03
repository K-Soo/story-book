import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '@components/layout';
import wrapper from '@store';
import GlobalStyle from 'styles/GlobalStyle';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import Theme from 'styles/Theme';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'src/reactQuery/queryClient';
import { Provider } from 'react-redux';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout<T> = AppProps<T> & {
  Component: NextPageWithLayout;
};

// prettier-ignore
function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout<{ session: Session }>) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  const getLayout = Component.getLayout ?? (page => {page});

  return (
    <React.Fragment>
      <Head>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
        <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SessionProvider session={session}>
            <GlobalStyle />
            <Theme>
              {Component.getLayout && <>{getLayout(<Component {...pageProps} />)}</>}
              {!Component.getLayout && (
                <>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </>
              )}
            </Theme>
          </SessionProvider>
        </Provider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
