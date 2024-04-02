// src/components/SignupForm.tsx
import React from 'react';
import { View, TextInput, Button,StyleSheet } from 'react-native';

const FormCadastro = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = () => {
    // Implementar a lógica de cadastro aqui
  };

  return (
    <View style={styles.container}>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <TextInput
        style={styles.input}
        placeholder="Profissão"
        value={profession}
        onChangeText={setProfession}
      />
      <TextInput
       style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleSignup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default FormCadastro;
