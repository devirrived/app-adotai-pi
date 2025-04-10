import React, { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, Platform, TouchableHighlight, View, Animated, Easing } from 'react-native';

import Input from '@/components/Input/Input';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import logo from '@/assets/images/logo.png'; // Importando o logo no topo do arquivo
import logoRedondo from '@/assets/images/logo-redondo.png'; // Importando o logo redondo com um nome diferente

// Add animação de logo 
export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [showContent, setShowContent] = useState(false); // Controla a exibição do conteúdo principal
  const scaleAnim = useRef(new Animated.Value(0)).current; // Animação de escala

  useEffect(() => {
    // Inicia a animação ao abrir o app
    Animated.timing(scaleAnim, {
      toValue: 2,
      duration: 3000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => setShowContent(true)); // Mostra o conteúdo principal após a animação
  }, []);

  if (!showContent) {
    // Tela de animação inicial
    return (
      <View style={styles.splashContainer}>
        <Animated.View
          style={[
            styles.logoContainer,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <Image source={logoRedondo} style={styles.logo} />
        </Animated.View>
      </View>
    );
  }
//Fim da animação do logo


  // Usando useState para gerenciar o valor do input
  

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={logo} // Usando o logo aqui
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
//Removi a linha export default Header;
// Essa linha estava fora de contexto e causava o erro.
// Mantido o uso do logo no headerImage no componente Image


const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#025E73', // Cor alterada para  claro
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
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

