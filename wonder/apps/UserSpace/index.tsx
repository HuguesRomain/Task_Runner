import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InfosView } from './screens/Infos';
import { BucketListView } from './screens/BucketList';
import { AlbumsView } from './screens/Albums/index';
import { PhotosView } from './screens/Photos/index';
import { ArticlesView } from './screens/Articles/index';
import { ArticleItemView } from './screens/ArticleItem';

const Stack = createStackNavigator();

export const HomeView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Albums">
        <Stack.Screen name="Infos" component={InfosView} />
        <Stack.Screen name="BucketList" component={BucketListView} />
        <Stack.Screen name="Albums" component={AlbumsView} />
        <Stack.Screen name="Photos" component={PhotosView} />
        <Stack.Screen name="Articles" component={ArticlesView} />
        <Stack.Screen name="ArticleItemView" component={ArticleItemView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

