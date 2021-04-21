import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

const Content = styled.View`
  padding: 10%;
  display: flex;
`;

const FirstAlbum = styled.TouchableOpacity`
  background-color: #FFE5ED;
  overflow: hidden;
  border-radius: 16px;
`;

const FirstImage = styled.Image`
  width: 100%;
  height: 156px;
  border-radius: 16px;
`;

const Albums = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 16px;
  background-color: #FFE5ED;
  margin: 16px 0;
  width: 152px;
`;

const AlbumBottom = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const ImageAlbum = styled.Image`
  width: 152px;
  height: 156px;
  border-radius: 16px;
`;

const TextAlbum = styled.Text`
  width: 100%;
  color: #1F2557;
  font-size: 16px;
`;


export const AlbumsView = ({ navigation }: any) => {
  const [firstAlbum, setFirstAlbum] = useState<any>();
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
      .then((resp) => {
        const firstAlbum = resp[0];
        const restAlbum = resp.splice(1, 1);
        setFirstAlbum(firstAlbum);
        setAlbums(restAlbum)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <Content>
      <FirstAlbum
        onPress={() => {
          navigation.navigate('Photos', {
            albumId: firstAlbum && firstAlbum.id,
            albumTitle: firstAlbum && firstAlbum.title,
          });
        }}
      >
        <FirstImage
          source={{ uri: firstAlbum && firstAlbum.urlImage }}
        />
        <AlbumBottom>
            <TextAlbum>{albums && firstAlbum.title}</TextAlbum>
            <Icon
                name="chevron-right"
                size={15}
                color="#FF5F91"
            />
          </AlbumBottom>
      </FirstAlbum>
      <FlatList
        data={albums}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
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
            <AlbumBottom>
              <TextAlbum>{item.title}</TextAlbum>
              <Icon
                  name="chevron-right"
                  size={15}
                  color="#FF5F91"
              />
            </AlbumBottom>
          </Albums>
        )}
      />
    </Content>
  );
}


