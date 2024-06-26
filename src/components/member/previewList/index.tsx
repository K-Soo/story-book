import styled from 'styled-components';
interface IPreviewList {}

interface IPreviewList {
  children: React.ReactNode;
}

export default function PreviewList({ children }: IPreviewList) {
  return <S.PreviewList>{children}</S.PreviewList>;
}

const S = {
  PreviewList: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 222px;
    position: relative;
  `,
};
