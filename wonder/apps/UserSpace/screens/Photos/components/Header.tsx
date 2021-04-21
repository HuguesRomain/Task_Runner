import React from 'react';
import { View, FlatList, Image, Button, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

const Title = styled.Text`
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: #665BDF;
    font-weight: bold;
    margin-right: 15px;
`;

const Content = styled.View`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 20px;
`;

export const Header = ({ ...props }) => {
    const navigation: any = props.navigation;
    const albumTitle: string = props.albumTitle;

    return (
        <Content>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="chevron-left"
                    size={20}
                    color="#1F2557"
                />
            </TouchableOpacity>
            <Title>{albumTitle}</Title>
        </Content>
    );
}