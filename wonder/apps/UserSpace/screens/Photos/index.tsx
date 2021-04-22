import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, FlatList, Image, Button, Text, TouchableOpacity} from 'react-native';
import { Header } from './components/Header';
import { CarouselCards } from './components/Carousel';

import styled from 'styled-components/native';

const Content = styled.View`
    width: 100%;
    height: 100%;
    padding: 5% 8%;
`;

const Photo = styled.Image`
    width: 100%;
    height: 156px;
    border-radius: 10px;
`;

const PhotoContent = styled.TouchableOpacity`
    width: 45%;
`

export const PhotosView = ({ route, navigation }: any) => {
    const { albumId, albumTitle } = route.params;
    const [photos, setPhotos] = useState<Photos[]>();
    const [carousel, setCarousel] = useState<Boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<Number>();

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
        <>
            <Header navigation={navigation} albumTitle={albumTitle} />
            { carousel && 
                <CarouselCards setCarousel={setCarousel} photoIndex={photoIndex} CarouselCardItem={photos} /> 
            }
            <Content>
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    data={photos}
                    numColumns={2}
                    renderItem={({item}) => (
                        <PhotoContent onPress={() => {
                            setCarousel(true);
                            setPhotoIndex(item.id);
                        }}>
                            <Photo
                                source={{ uri: item.url }}
                            />
                        </PhotoContent>
                    )}
                />
            </Content>
        </>
    );
}
