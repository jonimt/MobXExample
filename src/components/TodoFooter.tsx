import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, ViewStyle} from 'react-native';
import {todoStore} from '../store/TodoStore';
import {AddTodoButton} from './AddTodoButton';
import {TodoInput} from './TodoInput';

export const TodoFooter: FC = () => {
  const [todoTask, setTodoTask] = useState('');

  const onChangeText = useCallback((title: string) => setTodoTask(title), []);

  const addTodo = useCallback(() => {
    setTodoTask('');
    todoStore.addTodo(todoTask);
  }, [todoTask]);

  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <TodoInput value={todoTask} onChangeText={onChangeText} />
      <AddTodoButton onPress={addTodo} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  } as ViewStyle,
});
