import FilterBox from '@components/common/FilterBox';
import { render } from '@testing-library/react';
import LayoutTable from 'src/icons/svg/layoutTable.svg';

describe('filter box', () => {
  test('should first', () => {
    const { getByText } = render(<FilterBox />);
    expect(getByText('tttt')).toBeTruthy();
  });
});
