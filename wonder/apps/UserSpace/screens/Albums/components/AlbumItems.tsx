import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Album } from '../index'

import styled from 'styled-components/native';

const Albums = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 16px;
    background-color: #FFE5ED;
    margin: 16px 0;
    width: 45%;
`;

const AlbumBottom = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`;

const ImageAlbum = styled.Image`
    width: 100%;
    height: 156px;
    border-radius: 16px;
`;

const TextAlbum = styled.Text`
    width: 100%;
    color: #1F2557;
    font-size: 16px;
`;

export const AlbumItems = ({ ...props }) => {
    const album: Album = props.album;
    const navigation: any = props.navigation;

    return (
        <Albums
            onPress={() => {
                navigation.navigate('Photos', {
                    albumId: album.id,
                    albumTitle: album.title,
                });
            }}
        >
            <ImageAlbum source={{ uri: album.urlImage }} />
            <AlbumBottom>
            <TextAlbum>{album.title}</TextAlbum>
            <Icon
                name="chevron-right"
                size={15}
                color="#FF5F91"
            />
            </AlbumBottom>
        </Albums>
    );
}