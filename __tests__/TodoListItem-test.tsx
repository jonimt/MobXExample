import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TodoListItem} from '../src/components/TodoListItem';
import {Todo} from '../src/store/TodoStore';

// Creating a mock of the Todo
// and the complete method of the Todo
const mockComplete = jest.fn();
jest.mock('../src/store/TodoStore', () => {
  return {
    Todo: jest.fn().mockImplementation(() => {
      return {
        id: 'id',
        title: 'Test Todo',
        completed: false,
        complete: mockComplete,
      };
    }),
  };
});

// Clearing mock before every test
beforeEach(() => {
  Todo.mockClear();
});

describe('TodoListItem testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer
      .create(<TodoListItem todo={new Todo('Test Todo')} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Pressing the TodoListItem component should call
  // the complete method of the Todo passed as a prop
  it('Pressing TodoListItem is calling complete', () => {
    const {getByTestId} = render(<TodoListItem todo={new Todo('Test Todo')} />);

    // To make sure we target correct component, we use testID
    // check TodoListItem Pressable to see we have given it the id of CompleteTodoButton
    const pressable = getByTestId('CompleteTodoButton');
    fireEvent(pressable, 'press');

    expect(pressable).toBeTruthy();
    expect(mockComplete).toHaveBeenCalled();
  });
});
