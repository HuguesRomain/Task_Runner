import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Album } from '../index'

import styled from 'styled-components/native';

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

const AlbumBottom = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`;

const TextAlbum = styled.Text`
    width: 100%;
    color: #1F2557;
    font-size: 16px;
`;

export const FirstAlbumItem = ({ ...props }) => {
    const firstAlbum: Album = props.firstAlbum;
    const navigation: any = props.navigation;

    return (
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
                <TextAlbum>{firstAlbum && firstAlbum.title}</TextAlbum>
                <Icon
                    name="chevron-right"
                    size={15}
                    color="#FF5F91"
                />
            </AlbumBottom>
        </FirstAlbum>
    );
}