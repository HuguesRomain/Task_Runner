import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Todos } from '../index';

import styled from 'styled-components/native';

const Content =  styled.TouchableOpacity`
    z-index: 1;
    position: absolute;
    background-color:rgba(31, 37, 87,0.7);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentInput = styled.View`
    background-color: white;
    width: 100%;
    padding: 19px 24px;
`;

const TodoInputStyled = styled.View`
    flex-direction: row;
    border: 2px solid #E0DEF9;
    padding: 10px;
    border-radius: 10px;
`;

const InputStyled = styled.TextInput`
    flex: 4;
`

const Add = styled.TouchableOpacity`
    border-radius: 10px;
    padding: 10px 12px;
    background-color: #FF5F91;
`

export const InputTack = ({ ...props }) => {
    const [text, onChangeText] = useState<string>("");
    const handletackAdd = (todo: Todos): void => {
        props.addTack(todo);
    }
    const setAddTodo: any= props.setAddTodo;

    return (
        <Content onPress={() => {setAddTodo(false)}}>
            <ContentInput>
                <TodoInputStyled>
                    <InputStyled placeholder="New destination..." onChangeText={onChangeText} value={text}></InputStyled>
                    <Add onPress={() => handletackAdd({userId: 1, id: 1, title: text, completed: false})}>
                        <Icon
                            name="plus"
                            size={15}
                            color="white"
                        />
                    </Add>
                </TodoInputStyled>
            </ContentInput>
        </Content>
    );
}
