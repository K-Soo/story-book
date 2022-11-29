import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@components/layout';
import wrapper from '@store';
import GlobalStyle from 'styles/GlobalStyle';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import Theme from 'styles/Theme';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'src/reactQuery/queryClient';
import { Provider } from 'react-redux';

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

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
      <GlobalStyle />
      <Provider store={store}>
        <SessionProvider session={session}>
          <Theme>
            <QueryClientProvider client={queryClient}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QueryClientProvider>
          </Theme>
        </SessionProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
