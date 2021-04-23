import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InfosView } from './screens/Infos';
import { BucketListView } from './screens/BucketList/index';
import { AlbumsView } from './screens/Albums/index';
import { PhotosView } from './screens/Photos/index';
import { ArticleView } from './screens/Articles/index';
import { ArticleItemView } from './screens/ArticleItem';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import { color } from '../../const';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const HeaderStyled = styled.View`
  background-color: ${color.main};
  height: 130px;
`

const Tab = createMaterialTopTabNavigator();

export const ProfileView = () => {
  return (
    <>
      <HeaderStyled />
      <Tab.Navigator initialRouteName="Infos">
        <Tab.Screen options={{
            tabBarIcon: () => <Icon name="user" />,
          }} name="Infos" component={InfosView} />
        <Tab.Screen name="BucketList" component={BucketListView} />
        <Tab.Screen name="Albums" component={AlbumsView} />
        <Tab.Screen name="Articles" component={ArticleView} />
      </Tab.Navigator>
    </>
  );
}