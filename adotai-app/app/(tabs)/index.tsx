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
  }, []); // Certifique-se de que o bloco useEffect está corretamente fechado

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

  // Conteúdo principal do app

return (
  <ParallaxScrollView
    headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }} // Fundo branco para o cabeçalho
    headerImage={
      <Image
        source={logo} // Usando o logo aqui
        style={styles.reactLogo}
      />
    }>
  <ThemedView style={[styles.titleContainer, { backgroundColor: '#FFFFFF' }]}>
  <Input
    value={inputValue}
    onChange={(value: string) => setInputValue(value)}
  />  {/* Corrigido o fechamento da tag */}
  <ThemedText type="title">Welcome, grupo da UNIVESP!</ThemedText>
  <HelloWave /> 
</ThemedView> {/* Corrigido o fechamento da tag */}
<TouchableHighlight
  style={[styles.button, { backgroundColor: '#FFFFFF' }]}
  underlayColor="#ddd"
  onPress={() => console.log('botao clicado')}
>
  <ThemedText type="default">Submit</ThemedText>
</TouchableHighlight>
<ThemedView style={[styles.stepContainer, { backgroundColor: '#FFFFFF' }]}>
  <ThemedText type="subtitle">Step 1: Try it</ThemedText>
  <ThemedText>
    Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    Press{' '}
    <ThemedText type="defaultSemiBold">
      {Platform.select({
        ios: 'cmd + d',
        android: 'cmd + m',
        web: 'F12',
      })}
    </ThemedText>{' '}
    to open developer tools.
  </ThemedText>
</ThemedView> 
</ParallaxScrollView>
  );
}
// Estilos para o componente  
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#025E73', // Cor alterada para azul claro (página da animação)
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    width: 100, // Ajuste do tamanho do botão
    height: 50,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8, // Bordas arredondadas para um design mais moderno
    borderWidth: 1, // Borda para destacar o botão
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fundo branco
    borderColor: '#CCCCCC', // Cor da borda
  },
  buttonText: {
    color: '#000000', // Texto preto para contraste
    fontSize: 16,
    fontWeight: 'bold',
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