import HorizontalLine from '@components/common/HorizontalLine';
import styled, { css } from 'styled-components';
import { TTapTypes } from '@containers/memberContainer/PreviewListContainer';

interface ILibraryTap {
  selectTap: TTapTypes;
  setSelectTap: React.Dispatch<React.SetStateAction<TTapTypes>>;
}

export default function LibraryTap({ selectTap, setSelectTap }: ILibraryTap) {
  return (
    <>
      <HorizontalLine height='1px' />
      <S.LibraryTap>
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
      </S.LibraryTap>
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
  LibraryTap: styled.div`
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
