import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {TodoList} from '../src/components/TodoList';

describe('TodoList testing', () => {
  // Snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(<TodoList todos={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // List should work when passing empty array
  it('Empty list should be working', () => {
    const {queryAllByTestId} = render(<TodoList todos={[]} />);

    const allTodoItems = queryAllByTestId('TodoListItem');

    expect(allTodoItems).toHaveLength(0);
  });

  // List should work when passing array with Todos
  it('List with todos should be working', () => {
    const mockTodo = {
      id: 'id',
      title: 'Test',
      completed: false,
      complete: () => {},
    };
    const {queryAllByTestId} = render(<TodoList todos={[mockTodo]} />);

    const allTodoItems = queryAllByTestId('TodoListItem');

    expect(allTodoItems).toHaveLength(1);
  });
});
