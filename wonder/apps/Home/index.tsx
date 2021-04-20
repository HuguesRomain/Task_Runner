import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TravelersListView } from './screens/TravelersList';
import { MapView } from './screens/Map';

const Stack = createStackNavigator();

export const HomeView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TravelersListView">
        <Stack.Screen name="TravelersListView" component={TravelersListView} />
        <Stack.Screen name="MapView" component={MapView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

