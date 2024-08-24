import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Index from './src/components/Index';  
import PaymentBranch from './src/components/PaymentBranch';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Index" component={Index} /> 
        <Stack.Screen name="PaymentBranch" component={PaymentBranch} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
