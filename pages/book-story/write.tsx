import React from 'react';
import type { NextPage } from 'next';
import BookStoryWriteContainer from '@containers/bookStoryWriteContainer';
import DetailLayout from '@components/layout/detailLayout';

export default function WritePage(props: NextPage) {
  return <BookStoryWriteContainer />;
}
WritePage.getLayout = (page: React.ReactElement) => {
  return <DetailLayout>{page}</DetailLayout>;
};
