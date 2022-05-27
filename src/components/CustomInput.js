import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function Search(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType="default"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    minWidth: 200,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#3b4053',
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
