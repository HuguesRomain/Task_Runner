import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Todos } from '../index';

import styled from 'styled-components/native';

const Content =  styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #E7E7E7;
    padding: 23px;
`

const Checkbox =  styled.TouchableOpacity<{ checked: Boolean }>`
    width: 24px;
    height: 24px;
    border: 1px solid #776CAB;
    background-color: ${({checked}) => checked ?'#776CAB': 'transparent'};
    border-radius: 50px;
    padding: 5px;
`

const Title = styled.Text`
    font-size: 16px;
    color: #1F2557;
    margin: 0 16px;
`

export const Task = ({ ...props }) => {
    const item: Todos = props.item;
    const [checked, setChecked] = useState<Boolean>(item.completed)

    return (
        <Content>
            <Checkbox checked={checked} onPress={() => setChecked(!checked)}></Checkbox>
            <Title>{item.title}</Title>
        </Content>
    );
}
