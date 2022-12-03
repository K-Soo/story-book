import React from 'react';
import styled from 'styled-components';
import BookStoryDetail from '@components/bookStoryDetail';

export default function BookStoryDetailContainer() {
  React.useEffect(() => {
    (async () => {
      try {
        // cosnt res
      } catch (error) {
        console.log('error: ', error);
      } finally {
      }
    })();
  }, []);
  return <BookStoryDetail />;
}
