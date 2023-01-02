import React from 'react';
import styled from 'styled-components';
import Icon from 'src/icons/Icon';

export default React.memo(function WriteGuide() {
  const [isOpenText, setIsOpenText] = React.useState(true);

  return (
    <S.WriteGuide>
      <div className='wrapper'>
        <p className='wrapper__title'>작성 가이드</p>
        <Icon name='ArrowLeft' onClick={() => setIsOpenText(prev => !prev)} />
      </div>
      {isOpenText && (
        <ul className='list'>
          <li className='list__item'>등록하실 도서를 검색해서 등록 후 다음을 눌러주세요</li>
          <li className='list__item'>도서 내용을 입력 후 출간하기 버튼을 눌러주세요.</li>
        </ul>
      )}
    </S.WriteGuide>
  );
});

const S = {
  WriteGuide: styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 0 10px;
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      &__title {
        font-weight: 600;
      }
    }
    .list {
      padding-left: 10px;
      &__item {
        font-size: 12px;
        padding-bottom: 10px;
      }
    }
  `,
};
