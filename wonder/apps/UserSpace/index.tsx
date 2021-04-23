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

const Tab = createMaterialTopTabNavigator();

export const ProfileView = () => {
  return (
      <Tab.Navigator initialRouteName="Infos">
        <Tab.Screen name="Infos" component={InfosView} />
        <Tab.Screen name="BucketList" component={BucketListView} />
        <Tab.Screen name="Albums" component={AlbumsView} />
        <Tab.Screen name="Articles" component={ArticleView} />
      </Tab.Navigator>
  );
}