import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TodoFooter} from '../src/components/TodoFooter';

describe('TodoFooter testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(<TodoFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
