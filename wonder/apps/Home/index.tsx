import React, { SetStateAction, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TravelersListView } from './screens/TravelersList';
import { MapView } from './screens/Map';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../../const';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const HeaderHome = styled.View`
  height: 120px;
  background-color: ${color.main};
`


export const HomeView = () => {
  return (
    <NavigationContainer>
      <HeaderHome/>        
      <Tab.Navigator  
      tabBarOptions={{
        activeTintColor: 'white',
        indicatorStyle:{backgroundColor: "white"},
        labelStyle: { fontSize: 16 },
        style: { color: "white", backgroundColor: color.main, borderColor: "white" },
      }}>
          <Tab.Screen name="Travelers List" component={TravelersListView} />
          <Tab.Screen name="Map" component={MapView} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}