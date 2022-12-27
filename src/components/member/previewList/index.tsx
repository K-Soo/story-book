import styled from 'styled-components';
import PreviewTap from '@components/member/previewList/PreviewTap';
interface IPreviewList {}

export default function PreviewList({}: IPreviewList) {
  return (
    <S.PreviewList>
      <PreviewTap />
    </S.PreviewList>
  );
}

const S = {
  PreviewList: styled.div``,
};
