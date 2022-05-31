import React, {FC} from 'react';
import {View, StyleSheet, ViewStyle, Pressable, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Todo} from '../store/TodoStore';
import {Tick} from './Tick';

interface ITodoListItem {
  todo: Todo;
}

export const TodoListItem: FC<ITodoListItem> = observer(({todo}) => {
  return (
    <View style={styles.container} testID={'TodoListItem'}>
      <Pressable
        testID={'CompleteTodoButton'}
        key={todo.id}
        style={styles.item}
        onPress={() => todo.complete()}>
        <View style={styles.flex1}>
          <Text numberOfLines={2}>{todo.title}</Text>
        </View>
        <Tick completed={todo.completed} />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    alignItems: 'center',
  } as ViewStyle,
  flex1: {
    flex: 1,
  } as ViewStyle,
  item: {
    height: 50,
    marginTop: 8,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: 'brown',
    backgroundColor: 'pink',
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
});
