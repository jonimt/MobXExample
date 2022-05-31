import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {TodoFooter} from '../components/TodoFooter';
import {TodoList} from '../components/TodoList';
import {todoStore} from '../store/TodoStore';

export const MainScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoList todos={todoStore.todos} />
      <TodoFooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
