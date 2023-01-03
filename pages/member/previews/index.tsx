import MemberPreviewsContainer from '@containers/memberPreviewsContainer';
import DetailLayout from '@components/layout/detailLayout';
import AnimatePage from '@components/common/AnimatePage';
export default function PreviewsPage() {
  return <MemberPreviewsContainer />;
}

PreviewsPage.getLayout = (page: React.ReactElement) => {
  return (
    <AnimatePage>
      <DetailLayout title='위시리스트'>{page}</DetailLayout>
    </AnimatePage>
  );
};
