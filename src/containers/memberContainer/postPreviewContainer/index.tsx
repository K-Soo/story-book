import styled from 'styled-components';
import usePrivateQuery from '@hooks/usePrivateQuery';
import { Get } from '@api';

interface IPostPreviewContainer {}

export default function PostPreviewContainer({}: IPostPreviewContainer) {
  const requestData = {
    queryKey: ['asd'],
    requestAPI: Get.getMemberPreviewLikes,
    requestData: {},
    options: {
      suspense: false,
    },
  };

  const { data, isError, isLoading } = usePrivateQuery(requestData);

  console.log('data: ', data);

  return (
    <S.PostPreviewContainer>
      <div>asd</div>
    </S.PostPreviewContainer>
  );
}

const S = {
  PostPreviewContainer: styled.div``,
};
