// VaccineForm.tsx

import React from 'react';
import { View, Text, Switch, Button } from 'react-native';
import { Formik, Field } from 'formik';

export interface VaccineFormData {
  influenza: boolean;
  pneumococica: boolean;
  herpeszoster: boolean;
  triplicebacteriana: boolean;
  hepatiteb: boolean;
  febreamarela: boolean;
  vsr: boolean;
}

interface Props {
  onSubmit: (values: VaccineFormData) => void;
}

const VaccineForm: React.FC<Props> = ({ onSubmit }) => {
  const initialValues: VaccineFormData = {
    influenza: false,
    pneumococica: false,
    herpeszoster: false,
    triplicebacteriana: false,
    hepatiteb: false,
    febreamarela: false,
    vsr: false,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View>
          <Text>Já tomou vacian contraInfluenza?</Text>
          <Field as={Switch} name="influenza" />
          <Text>Já tomou vacinas antipneumocócicas ?</Text>
          <Field as={Switch} name="pneumococica" />
          <Text>Já tomou a vacina contra o Herpes zóster?</Text>
          <Field as={Switch} name="herpeszoster" />
          <Text>Já tomou a vacina Tríplice Bacteriana?</Text>
          <Field as={Switch} name="triplicebacteriana" />
          <Text>Já tomou a vacina Hepatite B</Text>
          <Field as={Switch} name="hepatiteb" />
          <Text>Já tomou a vacina Febre Amarela</Text>
          <Field as={Switch} name="febreamarela" />
          <Text>Ja tomou a vacina VSR?</Text>
          <Field as={Switch} name="vsr" />
          <Button title="Submit" onPress={handleSubmit as any} />
        </View>
      )}
    </Formik>
  );
};

export default VaccineForm;
