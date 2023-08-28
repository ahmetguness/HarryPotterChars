import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CharListScreen from './screens/CharListScreen';
import CharInfoScreen from './screens/CharInfoScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CharListScreen" component={CharListScreen} />
        <Stack.Screen name="CharInfoScreen" component={CharInfoScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator