import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';


import styled from 'styled-components/native';
import { ArticleItemView } from '../ArticleItem';

import {ArticleItemPreview} from './Components/ArticleItemPreview'

export interface Article {
  userId: number,
  id: number,
  title: string,
  body: string,
  image: string,
  comments: {body: string}[]
}


const ArticlesStyle = styled.View`
  flex: 1;
`;


const ArticlesListView = ({navigation}: any) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    (async () => {
      const result = await fetch('https://my-json-server.typicode.com/HuguesRomain/Task_Runner/posts')
      const data = await result.json()
      setData(data);
    })();
  }, []);

  return (
    <ArticlesStyle>
      <FlatList
        data={data}
        renderItem={({ item }: { item: Article }) => <ArticleItemPreview article={item} navigation={navigation}/>}
        keyExtractor={item => item.id.toString()}
      />
    </ArticlesStyle>
  );
}

const Stack = createStackNavigator();

export const ArticleView = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
      }} initialRouteName="Articles">
      <Stack.Screen name="Articles" component={ArticlesListView} />
      <Stack.Screen name="ArticleItemView" component={ArticleItemView} />
    </Stack.Navigator>
  )
}