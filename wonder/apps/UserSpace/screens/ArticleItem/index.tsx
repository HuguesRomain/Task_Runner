import React, { useState, useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';

import styled from 'styled-components/native';


export interface Article {
  userId: number,
  id: number,
  title: string,
  body: string,
  image: string,
  comments: {body: string}[]
}


const ArticleStyled = styled.View`
  flex: 1
`;


export const ArticleItemView = () => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    (async () => {
      const result = await fetch('https://my-json-server.typicode.com/HuguesRomain/Task_Runner/posts/?id=1')
      const data = await result.json()
      setArticle(data);
    })();
  }, {});

  return (
    <ArticleStyled>
      <Text>{article.title}</Text>
    </ArticleStyled>
  );
}

