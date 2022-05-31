import React, {FC, useCallback} from 'react';
import {StyleSheet, ViewStyle, ScrollView} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Todo} from '../store/TodoStore';
import {TodoListItem} from './TodoListItem';

interface ITodoList {
  todos: Todo[];
}

export const TodoList: FC<ITodoList> = observer(({todos}) => {
  const renderItem = useCallback(
    (todo: Todo) => <TodoListItem key={todo.id} todo={todo} />,
    [],
  );

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      {todos.map(todo => renderItem(todo))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
  } as ViewStyle,
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
});
