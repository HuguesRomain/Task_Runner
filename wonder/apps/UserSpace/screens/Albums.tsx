import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

const Content = styled.View`
  padding: 20px;
`;

const Albums = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 10px;
  background-color: #FFE5ED;
  margin: 16px 0;
  overflow: hidden;
`;

const ImageAlbum = styled.Image`
  width: 100%;
  height: 145px;
  border-radius: 10px;
`;

const TextAlbum = styled.Text`
  width: 100%;
  padding: 15px 15px;
  color: #1F2557;
  text-align: left;
  font-size: 16px;
`;


export const AlbumsView = ({ navigation }: any) => {
  const [albums, setAlbums] = useState<Albums[]>();

  interface Albums {
    userId: number;
    id: number;
    title: string;
    urlImage: string;
  }

  const getAlbums = () => {
    fetch('https://my-json-server.typicode.com/HuguesRomain/Task_Runner/albums')
      .then( value => value.json())
      .then((resp) => setAlbums(resp))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <Content>
      <FlatList
        data={albums}
        renderItem={({item}) => (
          <Albums
            onPress={() => {
              navigation.navigate('Photos', {
                albumId: item.id,
                albumTitle: item.title,
              });
            }}
          >
            <ImageAlbum
              source={{ uri: item.urlImage }}
            />
            <TextAlbum>{item.title}</TextAlbum>
          </Albums>
        )}
      />
    </Content>
  );
}


