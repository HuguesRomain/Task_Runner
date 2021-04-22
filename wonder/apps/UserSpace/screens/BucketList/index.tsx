import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import { Task } from "./components/Task";
import { InputTack } from "./components/InputTask";
import { ButtonAddTask } from "./components/ButtonAddTask";

import styled from 'styled-components/native';

export interface Todos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Content =  styled.View`
    height: 100%;
`

export const BucketListView = () => {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [addTodo, setAddTodo] = useState<Boolean>(false);

    const addTack = (todo: Todos) => {
        setTodos([todo , ...todos]);
        setAddTodo(false);
    }


    const getTodos = () => {
        fetch(`https://my-json-server.typicode.com/HuguesRomain/Task_Runner/todos`)
            .then( value => value.json())
            .then((resp) => setTodos(resp))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Content>
            {addTodo && <InputTack addTack={addTack} setAddTodo={setAddTodo}/>}
            <View>
                <FlatList
                    data={todos}
                    renderItem={({item}) => <Task item={item} /> }
                />
            </View>
            <ButtonAddTask setAddTodo={setAddTodo} />
        </Content>
    );
}