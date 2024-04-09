import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [dataDeNascimento, setDataDeNascimento] = useState('');
  const [profissao, setProfissao] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('postgresql://postgres:admin@localhost:5432/vacinebem003'
       ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, email, dataDeNascimento, profissao }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', data.message);
      } else {
        Alert.alert('Erro', data.message);
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro', 'Erro ao cadastrar usuário');
    }
  };

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} />
      {/* Outros campos do formulário... */}
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};




export default Cadastro;
