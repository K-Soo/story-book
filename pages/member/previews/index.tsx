import MemberPreviewsContainer from '@containers/memberPreviewsContainer';
import DetailLayout from '@components/layout/detailLayout';

export default function PreviewsPage() {
  return <MemberPreviewsContainer />;
}

PreviewsPage.getLayout = (page: React.ReactElement) => {
  return <DetailLayout title='위시리스트'>{page}</DetailLayout>;
};
