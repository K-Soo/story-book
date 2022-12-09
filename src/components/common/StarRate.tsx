import styled from 'styled-components';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

interface IStarRate {}

export default function StarRate({}: IStarRate) {
  return (
    <StyledRate
      // defaultValue={rate}
      // value={reviewRate}
      allowClear={false}
      // onChange={e => setReviewRate(e)}
      // character={<i className="anticon anticon-star" />}
    />
  );
}

const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: 30px;
    /* color: #000; */
  }
  .rc-rate-star-half .rc-rate-star-first,
  .rc-rate-star-full .rc-rate-star-second {
    /* color: var(--active) !important; */
  }
  .rc-rate-star.rc-rate-star-zero {
    /* opacity: 0.1; */
  }
  .rc-rate-star .rc-rate-star-full {
    /* opacity: 1; */
  }
`;

const S = {
  StarRate: styled.div``,
};
