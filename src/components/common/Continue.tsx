import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Continue({ href }: { href: string }) {
  const router = useRouter();
  return (
    <S.Continue>
      <Link href={href}>
        <a>더보기 {'>'}</a>
      </Link>
    </S.Continue>
  );
}

const S = {
  Continue: styled.div`
    display: flex;
    justify-content: flex-end;
    color: ${props => props.theme.colors.base};
    padding: 5px 10px;
    margin: 5px 0;
    background-color: #fff;
  `,
};
