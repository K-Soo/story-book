import React from 'react';
import BookStoryContainer from '@containers/bookStoryContainer';
import AnimatePage from '@components/common/AnimatePage';

export default function BookStoryPage() {
  return (
    <AnimatePage>
      <BookStoryContainer />
    </AnimatePage>
  );
}
