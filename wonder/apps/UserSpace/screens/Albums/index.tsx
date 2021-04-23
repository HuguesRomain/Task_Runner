import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { FirstAlbumItem } from './components/FirstAlbumItem'
import { AlbumItems } from './components/AlbumItems'
import { PhotosView } from '../Photos/';

import styled from 'styled-components/native';

export interface Album {
  userId: number;
  id: number;
  title: string;
  urlImage: string;
}

const Content = styled.View`
  padding: 10%;
  display: flex;
`;

const AlbumsListView = ({ navigation }: any) => {
  const [firstAlbum, setFirstAlbum] = useState<any>();
  const [albums, setAlbums] = useState<Album[]>();

  const getAlbums = () => {
    fetch('https://my-json-server.typicode.com/HuguesRomain/Task_Runner/albums')
      .then( value => value.json())
      .then((resp) => {
        const firstAlbum = resp[0];
        resp.splice(0, 1);
        setFirstAlbum(firstAlbum);
        setAlbums(resp)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <Content>
      <FirstAlbumItem navigation={navigation} firstAlbum={firstAlbum} />
      <FlatList
        data={albums}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => (
          <AlbumItems navigation={navigation} album={item}/>
        )}
      />
    </Content>
  );
}

const Stack = createStackNavigator();

export const AlbumsView = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
      }} initialRouteName="Albums">
      <Stack.Screen name="Albums" component={AlbumsListView} />
      <Stack.Screen name="Photos" component={PhotosView} />
    </Stack.Navigator>
  );
}


