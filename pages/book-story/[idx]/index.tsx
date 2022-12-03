import React from 'react';
import type { NextPage } from 'next';
import BookDetailContainer from '@containers/bookDetailContainer';
import BookStoryDetailContainer from '@containers/bookStoryDetailContainer';
import Layout from '@components/layout';

export default function BookStoryDetailPage(props: NextPage) {
  return <BookStoryDetailContainer />;
}

BookStoryDetailPage.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
