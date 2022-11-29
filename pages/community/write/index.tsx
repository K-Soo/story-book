import React from 'react';
import CommunityWriteContainer from '@containers/communityWriteContainer';

export default function WritePage() {
  return <CommunityWriteContainer />;
}

export async function getServerSideProps() {
  return { props: { status: 50 } };
}
