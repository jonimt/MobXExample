import 'react-native';
import React from 'react';
import {App} from '../App';
import {fireEvent, render} from '@testing-library/react-native';

describe('Test everything is working together', () => {
  it('Everything works together', async () => {
    const {
      queryAllByTestId,
      getByTestId,
      getAllByTestId,
      getByPlaceholderText,
      getByText,
      findByText,
    } = render(<App />);

    // In the header, there should be title Todos.
    // Header should be displaying zero todos and todo list to be empty
    expect(getByText('Todos')).toBeTruthy();
    expect(getByText('0/0')).toBeTruthy();
    expect(queryAllByTestId('TodoListItem')).toHaveLength(0);

    const addTodoInput = getByPlaceholderText('todo');

    // Add todo
    fireEvent(addTodoInput, 'changeText', 'First');
    // To make sure we target correct component, we use testID
    // check AddTodoButton Pressable to see we have given it the id of AddTodoButton
    fireEvent(getByTestId('AddTodoButton'), 'press');

    // Input should have been cleared
    // List to have one todo called First
    // Header to display total amount of 1
    expect(addTodoInput).toHaveProp('value', '');
    expect(getAllByTestId('TodoListItem')).toHaveLength(1);
    expect(getByText('First')).toBeTruthy();
    expect(getByText('0/1')).toBeTruthy();

    // Complete todo
    // To make sure we target correct component, we use testID
    // check TodoListItem Pressable to see we have given it the id of CompleteTodoButton
    fireEvent(getByTestId('CompleteTodoButton'), 'press');

    // Tick should be green
    // Header to display all todos completed
    expect(getByTestId('TodoListItemTick')).toHaveStyle({
      backgroundColor: 'green',
    });
    expect(await findByText('1/1')).toBeTruthy();
  });
});
