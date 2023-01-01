import React from 'react';
import BookStoryDetailContainer from '@containers/bookStoryDetailContainer';
import Layout from '@components/layout';
import DetailLayout from '@components/layout/detailLayout';
import { useAppSelector, useAppDispatch } from '@store';

export default function BookStoryDetailPage() {
  return <BookStoryDetailContainer />;
}

BookStoryDetailPage.getLayout = (page: React.ReactElement) => {
  return (
    <DetailLayout title='' marginBottom='50px'>
      {page}
    </DetailLayout>
  );
};
