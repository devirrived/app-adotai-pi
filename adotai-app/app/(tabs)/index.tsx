import React, { useState } from 'react';
import { Image, StyleSheet, Platform, TouchableHighlight } from 'react-native';

import Input from '@/components/Input/Input';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // Usando useState para gerenciar o valor do input
  const [inputValue, setInputValue] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        {/* Passando o estado e a função de atualização para o componente Input */}
        <Input
          value={inputValue}
          onChange={(value: string) => setInputValue(value)}
        />
        <ThemedText type="title">Welcome, grupo da UNIVESP!</ThemedText>
        <HelloWave />
      </ThemedView>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#ddd"
        onPress={() => console.log('botao clicado')}
      >
        <ThemedText type="default">Submit</ThemedText>
      </TouchableHighlight>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    width: 100,
    height: 50,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});