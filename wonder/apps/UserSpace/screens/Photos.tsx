import React, { useEffect, useState } from 'react';
import { View, FlatList, Image } from 'react-native';

import styled from 'styled-components/native';

const Content = styled.View`
    background-color: blue;
`;

export const PhotosView = ({ route }: any) => {
    const { albumId } = route.params;
    const [photos, setPhotos] = useState<Photos[]>();

    interface Photos {
        albumId: number;
        id: number;
        title: string;
        url: string;
    }

    const getPhotos = () => {
        fetch(`https://my-json-server.typicode.com/HuguesRomain/Task_Runner/photos?albumId=${albumId}`)
            .then( value => value.json())
            .then((resp) => setPhotos(resp))
            .catch((err) => console.log(err));
        };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <Content>
            <FlatList
                data={photos}
                renderItem={({item}) => 
                    <Image
                        source={{ uri: item.url }}
                    />
                }
            />
        </Content>
    );
}
