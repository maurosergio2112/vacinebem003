// VaccineScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import VaccineForm, { VaccineFormData } from './VaccineForm';

const VaccineScreen = () => {
  const [selectedVaccines, setSelectedVaccines] = React.useState<VaccineFormData | null>(null);

  const handleSubmit = (values: VaccineFormData) => {
    setSelectedVaccines(values);
  };

  return (
    <View>
      <Text>Vaccine Screen</Text>
      <VaccineForm onSubmit={handleSubmit} />
      <Text>Vacinas marcadas:</Text>
      {selectedVaccines && (
        <View>
          <Text>Influenza: {selectedVaccines.influenza ? 'Sim' : 'Não'}</Text>
          <Text>Pneumocócica: {selectedVaccines.pneumococica ? 'Sim' : 'Não'}</Text>
          <Text>Herpes Zoster: {selectedVaccines.herpeszoster ? 'Sim' : 'Não'}</Text>
          <Text>Tríplice Bacteriana: {selectedVaccines.triplicebacteriana ? 'Sim' : 'Não'}</Text>
          <Text>Hepatite B: {selectedVaccines.hepatiteb ? 'Sim' : 'Não'}</Text>
          <Text>Febre Amarela: {selectedVaccines.febreamarela ? 'Sim' : 'Não'}</Text>
          <Text>VSR: {selectedVaccines.vsr ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </View>
  );
};

export default VaccineScreen;
