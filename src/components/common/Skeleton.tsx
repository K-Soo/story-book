import styled from 'styled-components';

const SkeletonItem = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

const CardSkeleton = () => {
  return (
    <Wrapper>
      {new Array(6).fill('').map((_, i) => (
        <Card key={i}>
          <Title />
          <Content />
          <Bottom>
            <Circle />
            <Title />
          </Bottom>
        </Card>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  margin-top: 20px;
  background-color: #fff;
`;

const Card = styled.li`
  border: 1px solid #aaa;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const Title = styled(SkeletonItem)`
  margin-bottom: 10px;
`;

const Content = styled(SkeletonItem)`
  height: 130px;
  margin-bottom: 10px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 12px;
`;

const Circle = styled(SkeletonItem)`
  width: 35px;
  height: 30px;
  border-radius: 50%;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
`;

export default CardSkeleton;
