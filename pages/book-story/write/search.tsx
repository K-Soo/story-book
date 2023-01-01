import React from 'react';
import BookStoryWriteSearchContainer from '@containers/bookStoryWriteSearchContainer';
import DetailLayout from '@components/layout/detailLayout';

export default function BookStoryWriteSearchPage() {
  return (
    <React.Fragment>
      <BookStoryWriteSearchContainer />
    </React.Fragment>
  );
}

BookStoryWriteSearchPage.getLayout = (page: React.ReactElement) => {
  return <DetailLayout title='검색'>{page}</DetailLayout>;
};
