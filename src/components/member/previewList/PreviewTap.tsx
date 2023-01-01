import styled, { css } from 'styled-components';
import HorizontalLine from '@components/common/HorizontalLine';
import { TTapTypes } from '@containers/memberContainer/PreviewListContainer';
interface IPreviewTap {
  selectTap: TTapTypes;
  setSelectTap: React.Dispatch<React.SetStateAction<TTapTypes>>;
}

export default function PreviewTap({ selectTap, setSelectTap }: IPreviewTap) {
  return (
    <>
      <HorizontalLine height='1px' />
      <S.PreviewTap>
        <ul className='list'>
          <li className='list__item'>
            <StyledButton active={selectTap === 'LIKE'} onClick={() => setSelectTap('LIKE')}>
              좋아요
            </StyledButton>
          </li>
          <li className='list__item'>
            <StyledButton active={selectTap === 'SCRAP'} onClick={() => setSelectTap('SCRAP')}>
              스크랩
            </StyledButton>
          </li>
        </ul>
      </S.PreviewTap>
      <HorizontalLine height='1px' />
    </>
  );
}

const StyledButton = styled.button<{ active: boolean }>`
  color: ${props => props.theme.colors.gray1};
  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.colors.black};
      font-weight: 600;
    `};
`;

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
