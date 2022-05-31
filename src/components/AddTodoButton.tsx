import React, {FC} from 'react';
import {StyleSheet, ViewStyle, Pressable, Text} from 'react-native';

interface IAddTodoButton {
  onPress: () => void;
}

export const AddTodoButton: FC<IAddTodoButton> = ({onPress}) => {
  return (
    <Pressable testID={'AddTodoButton'} style={styles.button} onPress={onPress}>
      <Text>Add Todo</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    height: 50,
    borderRadius: 25,
    marginTop: 8,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
});
