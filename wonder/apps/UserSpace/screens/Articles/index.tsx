import React, { useState, useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';


import styled from 'styled-components/native';

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
  flex: 1
`;


export const ArticlesView = ({navigation}: any) => {
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

