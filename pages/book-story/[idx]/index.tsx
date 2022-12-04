import React from 'react';
import BookStoryDetailContainer from '@containers/bookStoryDetailContainer';
import Layout from '@components/layout';
import DetailLayout from '@components/layout/detailLayout';

export default function BookStoryDetailPage() {
  return <BookStoryDetailContainer />;
}

// BookStoryDetailPage.getLayout = (page: React.ReactElement) => {
//   return <DetailLayout>{page}</DetailLayout>;
// };
