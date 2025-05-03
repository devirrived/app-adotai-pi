import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, CheckBox } from 'react-native';

export default function CadastroScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false); // Estado para erro no e-mail
  const [birthDate, setBirthDate] = useState('');
  const [cep, setCep] = useState('');
  const [profession, setProfession] = useState('');
  const [objectives, setObjectives] = useState({
    adoptPet: false,
    putPetForAdoption: false,
    exploreApp: false,
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));
  };

  const handleSubmit = () => {
    if (!termsAccepted) {
      Alert.alert('Erro', 'Você precisa aceitar os Termos de Uso para continuar.');
      return;
    }

    if (emailError) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    Alert.alert('Cadastro realizado com sucesso!', `Bem-vindo(a), ${name}!`);
    // Aqui você pode enviar os dados para o backend ou salvar no estado global
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, emailError && styles.inputError]} // Aplica borda vermelha em caso de erro
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        onBlur={validateEmail} // Valida ao sair do campo
      />
      {emailError && (
        <Text style={styles.errorText}>Por favor, insira um e-mail válido.</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        value={birthDate}
        onChangeText={setBirthDate}
      />

      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Profissão"
        value={profession}
        onChangeText={setProfession}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={termsAccepted}
          onValueChange={setTermsAccepted}
        />
        <Text style={styles.checkboxLabel}>Aceito os Termos de Uso do aplicativo Adotaí</Text>
      </View>

      <View style={styles.separator} />

      <Text style={styles.subtitle}>Qual é seu objetivo no app?</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objectives.adoptPet}
          onValueChange={(value) => setObjectives({ ...objectives, adoptPet: value })}
        />
        <Text style={styles.checkboxLabel}>Adotar um pet</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objectives.putPetForAdoption}
          onValueChange={(value) => setObjectives({ ...objectives, putPetForAdoption: value })}
        />
        <Text style={styles.checkboxLabel}>Colocar pet(s) pra adoção</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objectives.exploreApp}
          onValueChange={(value) => setObjectives({ ...objectives, exploreApp: value })}
        />
        <Text style={styles.checkboxLabel}>Apenas desejo conhecer o app</Text>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red', // Borda vermelha em caso de erro
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#34A853',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});