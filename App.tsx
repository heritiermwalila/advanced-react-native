import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';

const Stack = createStackNavigator()

const AuthenficationStack = () => {
  return <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={LoginScreen}/>
          </Stack.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenficationStack />
    </NavigationContainer>
  );
}