import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {Title} from '../src/components/Title';

describe('Title testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(<Title title={''} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Test that Title component is displaying the title passed as a prop
  it('Title to be correct', () => {
    const {getByText} = render(<Title title={'Test title'} />);
    const text = getByText('Test title');

    expect(text).toHaveTextContent('Test title');
  });
});
