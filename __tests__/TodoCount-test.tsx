import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TodoCount} from '../src/components/TodoCount';

describe('TodoCount testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer
      .create(<TodoCount completed={0} total={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('TodoCount to be constructed correct from the props', () => {
    const {getByText} = render(<TodoCount completed={0} total={0} />);
    const text = getByText('0/0');

    expect(text).toHaveTextContent('0/0');
  });
});
