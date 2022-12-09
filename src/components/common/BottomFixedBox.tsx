import styled from 'styled-components';

interface IBottomFixedBox {
  children: React.ReactNode;
}

export default function BottomFixedBox({ children }: IBottomFixedBox) {
  return <S.BottomFixedBox>{children}</S.BottomFixedBox>;
}

// box-shadow : /* offset-x | offset-y | blur-radius | spread-radius | color */;

const S = {
  BottomFixedBox: styled.div`
    box-shadow: 0 -5px 20px 1px #f5f5f5;
    background-color: #fff;
    padding: 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 500px;
    margin: 0 auto;
    button {
      font-size: 16px;
      font-weight: 600;
    }
  `,
};
