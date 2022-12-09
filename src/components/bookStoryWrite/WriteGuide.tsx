import React from 'react';
import styled from 'styled-components';

export default React.memo(function WriteGuide() {
  const [isOpenText, setIsOpenText] = React.useState(false);

  return (
    <S.WriteGuide>
      <div className='wrapper'>
        <p>작성가이드</p>
        <p onClick={() => setIsOpenText(prev => !prev)}>^</p>
      </div>
      {isOpenText && (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit neque quos incidunt quasi.
          Harum saepe accusantium excepturi! Voluptate aliquam deserunt nulla voluptates temporibus, accusamus aut quas
          quia error laboriosam iste atque, eum deleniti eaque? Id ipsam eligendi optio ducimus error dignissimos
        </div>
      )}
    </S.WriteGuide>
  );
});

const S = {
  WriteGuide: styled.div`
    background-color: ${props => props.theme.colors.white};
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
    }
  `,
};
