import React from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import Member from '@components/member';
import Button from '@components/common/Button';
import HorizontalBar from '@components/common/HorizontalBar';
import MemberTap from '@components/member/MemberTap';
import Profile from '@components/member/Profile';
import Spinners from '@components/common/Spinners';
import PreviewListContainer from '@containers/memberContainer/PreviewListContainer';
import LibraryListContainer from '@containers/memberContainer/LibraryListContainer';
import styled from 'styled-components';
import AnimatePage from '@components/common/AnimatePage';

export type TSectionTypes = 'PROFILE' | 'LIBRARY';

export default function MemberContainer() {
  const [section, setSection] = React.useState<TSectionTypes>('PROFILE');
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== 'loading' && !session) {
    router.push('/sign-in');
  }

  function onClickLogOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    signOut({ callbackUrl: '/' });
  }

  const handleClickSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setSection(value as TSectionTypes);
  };

  return (
    <StyledWrapper>
      <div>
        <Member>
          <MemberTap handleClickSection={handleClickSection} section={section} />
          <Profile />
        </Member>
        {section === 'PROFILE' && (
          <AnimatePage>
            <PreviewListContainer />
          </AnimatePage>
        )}
        {section === 'LIBRARY' && (
          <AnimatePage>
            <LibraryListContainer />
          </AnimatePage>
        )}
      </div>
      <div className='button-box'>
        <HorizontalBar margin='0 0 20px 0' />
        <Button className='button-box__styled-button' label='로그아웃' onClick={onClickLogOut} />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .button-box {
    padding: 20px 10px;
    &__styled-button {
      background-color: #fff;
      color: ${props => props.theme.colors.base};
      border: 1px solid ${props => props.theme.colors.base};
    }
  }
`;
