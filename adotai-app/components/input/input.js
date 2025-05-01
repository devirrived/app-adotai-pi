import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input({ value, onChange }) {
  return (
    <View>
      <TextInput
        style={inputStyles.input}
        value={value}
        onChangeText={onChange} // Chama a função passada como prop
      />
      <Text style={inputStyles.text}>Search</Text>
    </View>
  );
}

const inputStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 2,
    color: 'black', // Alterado para preto para melhor visibilidade
    paddingHorizontal: 8,
  },
  text: {
    color: 'black', // Alterado para preto para melhor visibilidade
  },
});