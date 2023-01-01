import styled, { css } from 'styled-components';
import { TSectionTypes } from '@containers/memberContainer';

interface IMemberTap {
  handleClickSection: React.MouseEventHandler<HTMLButtonElement> | undefined;
  section: TSectionTypes;
}

export default function MemberTap({ handleClickSection, section }: IMemberTap) {
  return (
    <S.MemberTap section={section}>
      <ul className='list'>
        <li className='list__item'>
          <button className='list__item--profile' value='PROFILE' onClick={handleClickSection}>
            프로필
          </button>
        </li>
        <li className='list__item'>
          <button className='list__item--library' value='LIBRARY' onClick={handleClickSection}>
            서재
          </button>
        </li>
      </ul>
    </S.MemberTap>
  );
}

const S = {
  MemberTap: styled.div<{ section: TSectionTypes }>`
    height: 40px;
    margin-bottom: 10px;
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      &__item {
        text-align: center;
        flex: 1;
        display: flex;
        justify-content: center;
        height: 100%;
        &--profile {
          width: 100%;
          color: ${props => props.theme.colors.base};
          ${props =>
            props.section === 'PROFILE'
              ? css`
                  border-bottom: 2px solid ${props => props.theme.colors.base};
                  font-weight: 600;
                `
              : css`
                  border-bottom: 1px solid #e5e8eb;
                  color: #888;
                `}
        }

        &--library {
          width: 100%;
          color: ${props => props.theme.colors.base};
          ${props =>
            props.section === 'LIBRARY'
              ? css`
                  border-bottom: 2px solid ${props => props.theme.colors.base};
                  font-weight: 600;
                `
              : css`
                  border-bottom: 1px solid #e5e8eb;
                  color: #888;
                `}
        }
      }
    }
  `,
};
