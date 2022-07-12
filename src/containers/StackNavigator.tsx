import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const StackNavigator: FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
