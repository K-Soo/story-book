import styled from 'styled-components';

export default function LoginOnlyCover() {
  return (
    <S.LoginOnlyCover>
      <p className='text'>로그인 후 이용가능합니다</p>
    </S.LoginOnlyCover>
  );
}

const S = {
  LoginOnlyCover: styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 10px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      color: #fff;
    }
  `,
};
