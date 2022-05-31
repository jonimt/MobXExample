import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {Tick} from '../src/components/Tick';

describe('Tick testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(<Tick completed={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // To be able to use toHaveStyle matcher we need to setup
  // the '@testing-library/jest-native/extend-expect'
  it('initially(not complited) tick to be red', () => {
    const {getByTestId} = render(<Tick completed={false} />);

    const tick = getByTestId('TodoListItemTick');

    expect(tick).toHaveStyle({
      backgroundColor: 'red',
    });
  });

  // To be able to use toHaveStyle matcher we need to setup
  // the '@testing-library/jest-native/extend-expect'
  it('completed todo tick to be green', () => {
    const {getByTestId} = render(<Tick completed={true} />);

    const tick = getByTestId('TodoListItemTick');

    expect(tick).toHaveStyle({
      backgroundColor: 'green',
    });
  });
});
