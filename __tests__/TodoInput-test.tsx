import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TodoInput} from '../src/components/TodoInput';

describe('TodoInput testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer
      .create(<TodoInput value={''} onChangeText={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Writing to TodoInput should call the functon passed as a prop
  // And to be called with corret value
  it('Changing text works correctly', async () => {
    const mock = jest.fn();
    const {update, findByPlaceholderText} = render(
      <TodoInput value={''} onChangeText={mock} />,
    );

    const input = await findByPlaceholderText('todo');
    fireEvent(input, 'changeText', 'First');

    update(<TodoInput value={'First'} onChangeText={mock} />);
    expect(mock).toHaveBeenCalledWith('First');
    expect(input).toHaveProp('value', 'First');
  });
});
