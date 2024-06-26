import AnimatePage from '@components/common/AnimatePage';
import DetailLayout from '@components/layout/detailLayout';
import MemberLibraryContainer from '@containers/memberLibraryContainer';
import { ErrorBoundary } from 'react-error-boundary'; // (*)
import { useQueryErrorResetBoundary } from 'react-query'; // (*)
import { errorLog } from 'src/error/errorLog';

export default function LibraryPage() {
  const { reset } = useQueryErrorResetBoundary();
  return <MemberLibraryContainer />;
}

LibraryPage.getLayout = (page: React.ReactElement) => {
  return (
    <AnimatePage>
      <DetailLayout title='서재'>{page}</DetailLayout>
    </AnimatePage>
  );
};
