import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InfosView } from './screens/Infos';
import { BucketListView } from './screens/BucketList/index';
import { AlbumsView } from './screens/Albums/index';
import { PhotosView } from './screens/Photos/index';
import { ArticlesView } from './screens/Articles/index';
import { ArticleItemView } from './screens/ArticleItem';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();

// export const ProfileView = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Infos">
//         <Stack.Screen name="Infos" component={InfosView} />
//         <Stack.Screen name="BucketList" component={BucketListView} />
//         <Stack.Screen name="Albums" component={AlbumsView} />
//         <Stack.Screen name="Photos" component={PhotosView} />
//         <Stack.Screen name="Articles" component={ArticlesView} />
//         <Stack.Screen name="ArticleItemView" component={ArticleItemView} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Tab = createMaterialTopTabNavigator();

export const ProfileView = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Infos">
        <Tab.Screen name="Infos" component={InfosView} />
        <Tab.Screen name="BucketList" component={BucketListView} />
        <Tab.Screen name="Albums" component={AlbumsView} />
        <Tab.Screen name="Photos" component={PhotosView} />
        <Tab.Screen name="Articles" component={ArticlesView} />
        <Tab.Screen name="ArticleItemView" component={ArticleItemView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}