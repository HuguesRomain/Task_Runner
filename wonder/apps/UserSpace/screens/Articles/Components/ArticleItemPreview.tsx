import React from 'react';
import { Text, Image, View } from 'react-native';

import styled from 'styled-components/native';

const ArticleItemStyled = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: row;
`;


export const ArticleItemPreview = ({...props}) => {
  const article = props.article
  return (
    <ArticleItemStyled>
      <Text>{article.title}</Text>
      {/* <Image source={require(article.image)}></Image> */}
      <Text>{article.title}</Text>
    </ArticleItemStyled>
  )
}