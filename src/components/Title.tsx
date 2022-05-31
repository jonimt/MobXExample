import React, {FC} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface ITitle {
  title: string;
}

export const Title: FC<ITitle> = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 20,
  } as TextStyle,
});
