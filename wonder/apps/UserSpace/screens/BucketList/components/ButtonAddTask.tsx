import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

const Content =  styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #FF5F91;
    padding: 21px;
    border-radius: 50px;
    width: 60%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`

const Title = styled.Text`
    font-size: 16px;
    color: white;
    margin: 0 16px;
`

export const ButtonAddTask = ({ ...props }) => {
    const setAddTodo: any = props.setAddTodo;

    return (
        <Content onPress={() => setAddTodo(true)}>
            <Icon
                name="plus-square"
                size={25}
                color="white"
            />
            <Title>New destination</Title>
        </Content>
    );
}