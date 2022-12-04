import styled, { css } from 'styled-components';

const SkeletonItem = css`
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

const list = () => {
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

const detail = () => {
  return (
    <Wrapper>
      <Title />
      <PieceBlock>
        <div>
          <Piece />
          <Piece margin='0 0 0 10px' />
          <Piece margin='0 0 0 10px' />
        </div>
        <Piece />
      </PieceBlock>
      <Content height='280px' />
      <Content height='300px' />
      <Bottom>
        <Circle />
        <Title />
      </Bottom>
    </Wrapper>
  );
};

const oneLineList = () => {
  return (
    <Wrapper>
      {new Array(20).fill('').map((_, i) => (
        <Title key={i} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  background-color: #fff;
  padding: 0 10px;
`;

const Card = styled.li`
  border: 1px solid #aaa;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const Title = styled.div`
  ${SkeletonItem}
  margin-bottom: 10px;
`;
const PieceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Piece = styled.div<{ margin?: string }>`
  ${SkeletonItem}
  display: inline-block;
  height: 30px;
  width: 60px;
  margin: ${props => (props.margin ? props.margin : '0')};
`;

const Content = styled.div<{ height?: string }>`
  ${SkeletonItem};
  height: ${props => (props.height ? props.height : '130px')};
  margin-bottom: 15px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 12px;
`;

const Circle = styled.div`
  ${SkeletonItem};
  width: 35px;
  height: 30px;
  border-radius: 50%;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
`;

const Skeleton = { list, detail, oneLineList };

export default Skeleton;
