import React, {FC} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {observer} from 'mobx-react-lite';
import {todoStore} from '../store/TodoStore';
import {TodoCount} from './TodoCount';
import {Title} from './Title';

export const Header: FC = observer(() => {
  return (
    <View style={styles.container}>
      <Title title={'Todos'} />
      <TodoCount
        completed={todoStore.completedTodosCount}
        total={todoStore.totalTodos}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  } as ViewStyle,
});
