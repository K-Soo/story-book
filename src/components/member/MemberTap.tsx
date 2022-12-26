import styled from 'styled-components';

interface IMemberTap {
  handleClickSection: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function MemberTap({ handleClickSection }: IMemberTap) {
  return (
    <S.MemberTap>
      <ul className='list'>
        <li className='list__item'>
          <button className='list__item--profile' value='PROFILE' onClick={handleClickSection}>
            프로필
          </button>
        </li>
        <li className='list__item'>
          <button className='list__item-library' value='LIBRARY' onClick={handleClickSection}>
            서재
          </button>
        </li>
      </ul>
    </S.MemberTap>
  );
}

const S = {
  MemberTap: styled.div`
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
        border-bottom: 1px solid #000;
        &--profile {
          width: 100%;
          border-bottom: 1px solid #000;
        }
        &--library {
          width: 100%;
          border-bottom: 1px solid #000;
        }
      }
    }
  `,
};
