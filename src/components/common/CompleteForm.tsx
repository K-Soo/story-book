import styled from 'styled-components';
import Button from '@components/common/Button';
import { useRouter } from 'next/router';

interface ICompleteForm {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = '글 작성 완료' as const;
const DEFAULT_DESCRIPTION = '축하드립니다' as const;

export default function CompleteForm({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }: ICompleteForm) {
  const router = useRouter();
  return (
    <S.CompleteForm>
      <div className='inner-form'>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Button label='홈으로' onClick={() => router.replace('/')} />
      </div>
    </S.CompleteForm>
  );
}

const S = {
  CompleteForm: styled.div`
    border: 1px solid red;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    .inner-form {
      min-width: 350px;
      height: 450px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `,
};
