import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InfosView } from './screens/Infos';
import { BucketListView } from './screens/BucketList';
import { PhotosView } from './screens/Photos';
import {ArticlesView} from './screens/Articles/index';
import { ArticleItemView } from './screens/ArticleItem';

const Stack = createStackNavigator();

export const HomeView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="InfosView" component={InfosView} />
        <Stack.Screen name="BucketListView" component={BucketListView} />
        <Stack.Screen name="PhotosView" component={PhotosView} />
        <Stack.Screen name="ArticlesView" component={ArticlesView} />
        <Stack.Screen name="ArticleItemView" component={ArticleItemView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

