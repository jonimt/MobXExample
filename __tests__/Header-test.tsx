import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {Header} from '../src/components/Header';

describe('Header testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
