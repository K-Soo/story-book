import type { NextPage } from 'next';
import HomeContainer from '@containers/homeContainer';
import Layout from '@components/layout';

const Home = () => {
  return <HomeContainer />;
};

export default Home;

Home.getLayout = (page: React.ReactElement) => {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};
