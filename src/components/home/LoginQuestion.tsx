import styled from 'styled-components';

export default function LoginQuestion() {
  return (
    <S.LoginQuestion>
      <h3>아직 회원이 아니신가요?</h3>
    </S.LoginQuestion>
  );
}

const S = {
  LoginQuestion: styled.div`
    height: 100px;
    background-color: #fff;
    margin: 0 10px;
    border-radius: 10px;
    padding: 10px;
  `,
};
