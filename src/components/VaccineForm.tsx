import React, { useState } from 'react';
import { View, Text, Switch, Button, Alert } from 'react-native';

const VaccineForm = () => {
  const [respostas, setRespostas] = useState({
    influenza: false,
    pneumococica: false,
    herpeszoster: false,
    triplicebacteriana: false,
    hepatiteb: false,
    febreamarela: false,
    vsr: false,
  });

  const handleSubmit = async () => {
    try {
      for (const [nomeVacina, resposta] of Object.entries(respostas)) {
        const response = await fetch('postgresql://postgres:admin@localhost:5432/vacinebem003'
        , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ resposta, vacinaId: nomeVacina, usuarioId: 'id_do_usuario' }),
        });

        if (!response.ok) {
          throw new Error('Erro ao armazenar resposta');
        }
      }

      Alert.alert('Sucesso', 'Respostas registradas com sucesso!');
    } catch (error) {
      console.error('Erro ao armazenar respostas:', error);
      Alert.alert('Erro', 'Erro ao armazenar respostas');
    }
  };

  return (
    <View>
      <Text>Já tomou vacina contra Influenza?</Text>
      <Switch value={respostas.influenza} onValueChange={value => setRespostas({ ...respostas, influenza: value })} />
      <Text>Já tomou vacina contra Pneumonia, Meningite e Otite?</Text>
      <Switch value={respostas.influenza} onValueChange={value => setRespostas({ ...respostas, pneumococica: value })} />
      <Text>Já tomou vacina contra Papilomavírus Humano-HPV?</Text>
      <Switch value={respostas.influenza} onValueChange={value => setRespostas({ ...respostas, herpeszoster: value })} />
      <Text>Já tomou vacina Tríplice Bacteriana contra  doenças causadas por bactérias: Difteria, Tétano e Coqueluche?</Text>
      <Switch value={respostas.influenza} onValueChange={value => setRespostas({ ...respostas, triplicebacteriana: value })} />
      <Text>Já tomou vacina contra Hepatite B?</Text>
      <Switch value={respostas.influenza} onValueChange={value => setRespostas({ ...respostas, hepatiteb: value })} />
      <Text>Já tomou vacina contra Febre Amarela?</Text>
      <Switch value={respostas.influenza} onValueChange={value => setRespostas({ ...respostas, febreamarela: value })} />
      <Text>Já tomou vacina  Arexvy (vacina vírus sincicial-recombinante, adjuvada)?</Text>
      <Switch value={respostas.influenza} onValueChange={value => setRespostas({ ...respostas, vsr: value })} />
      {/* Outros campos do formulário... */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default VaccineForm;
