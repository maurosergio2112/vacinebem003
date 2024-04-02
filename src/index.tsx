import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';
import LoginForm from './components/LoginForm';
import Cadastro from './components/Cadastro';
import VaccineForm from './components/VaccineForm';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginForm">
        <Stack.Screen 
          name="LoginForm" 
          component={LoginForm} 
          options={({ navigation }) => ({
            title: 'Login',
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Button
                  title="Cadastro"
                  onPress={() => navigation.navigate('Cadastro')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={({ navigation }) => ({
            title: 'Cadastro',
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Button
                  title="VacineForm"
                  onPress={() => navigation.navigate('VaccineForm')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen name="VaccineForm" component={VaccineForm} options={{ title: 'Vaccine Form' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
