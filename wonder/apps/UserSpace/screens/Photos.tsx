import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, FlatList, Image, Button, Text, TouchableOpacity} from 'react-native';

import styled from 'styled-components/native';

const Content = styled.View`
    height: 100%;
`;

const Header = styled.View`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 10px;
`;

const Title = styled.Text`
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: #665BDF;
    font-weight: bold;
    margin-right: 10%;
`;

const Photo = styled.Image`
    width: 156px;
    height: 156px;
    border-radius: 10px;
    margin: 20px;
`;

const CarouselContent = styled.View`
    z-index: 1;
    position: absolute;
    background-color:rgba(31, 37, 87,0.7);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Carousel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ButtonCarousel = styled.TouchableOpacity`
`;

const CarouselImage = styled.Image`
    z-index: 1;
    width: 70%;
    height: 500px;
    border-radius: 16px;
    margin: 0 10px;
`;

const CarouselTitle = styled.Text`
    color: white;
    font-size: 16px;
    margin: 20px auto 0 15%;
`;

const Cross = styled.TouchableOpacity`
    border: solid 2px white;
    padding: 6px 8px;
    border-radius: 10px;
    margin: 0 15% 20px auto;
`;



export const PhotosView = ({ route, navigation }: any) => {
    const { albumId, albumTitle } = route.params;
    const [photos, setPhotos] = useState<Photos[]>();
    const [carousel, setCarousel] = useState<Boolean>(false);

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
            {carousel && 
                <CarouselContent>
                    <Cross onPress={() => setCarousel(false)} >
                        <Icon
                            name="times"
                            size={15}
                            color="white"
                        />
                    </Cross>
                    <Carousel>
                        <ButtonCarousel onPress={() => navigation.goBack()} >
                            <Icon
                                name="chevron-left"
                                size={30}
                                color="white"
                            />
                        </ButtonCarousel>
                        <CarouselImage source={{ uri: "https://i.pinimg.com/originals/1e/1d/2d/1e1d2d5817e8215acd03270827f94154.jpg" }}/>
                        <ButtonCarousel onPress={() => navigation.goBack()} >
                            <Icon
                                name="chevron-right"
                                size={30}
                                color="white"
                            />
                        </ButtonCarousel>
                    </Carousel>
                    <CarouselTitle>Tokyo Hotel</CarouselTitle>
                </CarouselContent> 
            }
            <Header>
                <Button title="Back" onPress={() => navigation.goBack()} />
                <Title>{albumTitle}</Title>
            </Header>
            <FlatList
                contentContainerStyle={{alignSelf: 'center'}}
                data={photos}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => setCarousel(true)}>
                        <Photo
                            source={{ uri: item.url }}
                        />
                    </TouchableOpacity>
                )}
            />
        </Content>
    );
}
