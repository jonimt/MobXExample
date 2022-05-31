import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {MainScreen} from '../src/screens/MainScreen';

describe('MainScreen testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(<MainScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
