import React, { useRef } from 'react'
import { View, FlatList, Image, Button, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';

import styled from 'styled-components/native';

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

const CarouselItem = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CarouselMain = styled.View`
    display: flex;
    width: 90%;
`

const CarouselImage = styled.Image`
    z-index: 1;
    height: 500px;
    border-radius: 16px;
    margin: 0;
`;

const CarouselTitle = styled.Text`
    color: white;
    font-size: 16px;
    margin: 20px 0;
    text-align: left;
`;

const Cross = styled.TouchableOpacity`
    border: solid 2px white;
    padding: 6px 8px;
    border-radius: 10px;
    margin: 0 5% 20px auto;
`;

export const CarouselCards = ({ ...props }) => {
    const setCarousel: any = props.setCarousel;
    const photoIndex: any = props.photoIndex;
    const CarouselCardItem: any = props.CarouselCardItem;

    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

    const ref: any = useRef(null)

    const _renderItem = ({item}: any) => {
        return(
            <CarouselMain>
                <CarouselImage source={{ uri: item?.url }} />
                <CarouselTitle>{item?.title}</CarouselTitle>
            </CarouselMain>
    )};

    return (
        <CarouselContent>
            <Cross onPress={() => setCarousel(false)}>
                <Icon
                    name="times"
                    size={15}
                    color="white"
                />
            </Cross>
            <CarouselItem>
                <TouchableOpacity onPress={() => ref.current?.snapToPrev()}>
                    <Icon
                        name="chevron-left"
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
                <Carousel
                    firstItem={photoIndex - 1}
                    ref={ref}
                    data={CarouselCardItem}
                    renderItem={_renderItem}
                    sliderWidth={viewportWidth}
                    itemWidth={viewportWidth}
                    slideStyle={{ width: viewportWidth }}
                />
                <TouchableOpacity onPress={() => ref.current?.snapToNext()}>
                    <Icon
                        name="chevron-right"
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
            </CarouselItem>
        </CarouselContent>
    )
}
