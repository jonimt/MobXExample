import React, {FC} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface ITodoCount {
  completed: number;
  total: number;
}

export const TodoCount: FC<ITodoCount> = ({completed, total}) => {
  return (
    <Text style={styles.todoCount}>
      {completed}/{total}
    </Text>
  );
};

const styles = StyleSheet.create({
  todoCount: {
    position: 'absolute',
    right: 15,
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
  } as TextStyle,
});
