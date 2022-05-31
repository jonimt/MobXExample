import React, {FC} from 'react';
import {StyleSheet, TextInput, TextStyle, View, ViewStyle} from 'react-native';

interface ITodoInput {
  value: string;
  onChangeText: (text: string) => void;
}

export const TodoInput: FC<ITodoInput> = ({value, onChangeText}) => {
  return (
    <View style={styles.padding}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={'todo'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 15,
  } as ViewStyle,
  textInput: {
    width: '100%',
    height: 50,
    paddingHorizontal: 8,
    textAlign: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
  } as TextStyle,
});
