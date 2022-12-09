import BookStoryWriteCompleteContainer from '@containers/bookStoryWriteCompleteContainer';

export default function completePage() {
  return <BookStoryWriteCompleteContainer />;
}

completePage.getLayout = (page: React.ReactElement) => {
  return <>{page}</>;
};
