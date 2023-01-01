import styled from 'styled-components';

interface IMember {
  children?: React.ReactNode;
}

export default function Member({ children }: IMember) {
  return <S.Member>{children}</S.Member>;
}

const S = {
  Member: styled.div`
    background-color: #fff;
    margin-bottom: 30px;
  `,
};
