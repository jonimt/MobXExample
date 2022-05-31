import React, {FC} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface ITick {
  completed: boolean;
}

export const Tick: FC<ITick> = ({completed}) => {
  const color = completed ? 'green' : 'red';

  return (
    <View
      testID={'TodoListItemTick'}
      style={[styles.tick, {backgroundColor: color}]}
    />
  );
};

const styles = StyleSheet.create({
  tick: {
    width: 20,
    height: 20,
    borderRadius: 8,
  } as ViewStyle,
});
