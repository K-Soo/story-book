import React from 'react';
import type { NextPage } from 'next';
import BookStoryWithPostContainer from '@containers/bookStoryWithPostContainer';
import DetailLayout from '@components/layout/detailLayout';

export default function WritePage() {
  return <BookStoryWithPostContainer />;
}

WritePage.getLayout = (page: React.ReactElement) => {
  return <DetailLayout>{page}</DetailLayout>;
};
