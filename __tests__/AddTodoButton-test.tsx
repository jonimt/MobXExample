import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {AddTodoButton} from '../src/components/AddTodoButton';

describe('AddTodoButton testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(<AddTodoButton onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Testing that AddTodoButton components onPress is working
  // and calling function passed as a props
  it('onPress working', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(<AddTodoButton onPress={mockOnPress} />);

    // To make sure we target correct component, we use testID
    // check AddTodoButton Pressable to see we have give it id of AddTodoButton
    const button = getByTestId('AddTodoButton');

    fireEvent(button, 'press');
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
