import React from 'react';
import { HomeView } from './wonder/apps/UserSpace';
/* import { HomeView } from './wonder/apps/Home/index'; */

import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { ProfileView } from './wonder/apps/UserSpace';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
          }}>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Profile" component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

