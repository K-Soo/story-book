import styled from 'styled-components';
import HorizontalLine from '@components/common/HorizontalLine';

interface IPreviewTap {}

export default function PreviewTap({}: IPreviewTap) {
  return (
    <>
      <HorizontalLine height='1px' />
      <S.PreviewTap>
        <ul className='list'>
          <li className='list__item'>좋아요</li>
          <li className='list__item'>스크랩</li>
        </ul>
      </S.PreviewTap>
      <HorizontalLine height='1px' />
    </>
  );
}

const S = {
  PreviewTap: styled.div`
    height: 40px;
    .list {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      &__item {
        width: 80px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `,
};
