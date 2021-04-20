import React from 'react';
import { Text, Image, View } from 'react-native';


import styled from 'styled-components/native';

import { Article } from '../index'

const ArticleItemStyled = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 15px;
`;

const ArticlePreviewInfosStyled = styled.View`
  flex: 1;
  padding: 15px;
`;

const ArticleTitleStyled = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const ArticleImageStyled = styled.Image`
  width: 120px;
  height: 180px;
`;

const CommentsPillStyled = styled.View`
  background-color: #FFE5ED;
  border-radius: 100px;
  padding: 8px 10px;
  width: 110px;
  margin-bottom: 10px;
  align-items: center;
`


export const ArticleItemPreview = ({...props}) => {
  const article: Article = props.article
  return (
    <ArticleItemStyled>
      <ArticleImageStyled source={{uri: article.image}}></ArticleImageStyled>
      <ArticlePreviewInfosStyled>
        <CommentsPillStyled>
          <Text style={{color: '#FF5F91'}}>{article.comments.length + ' Comments'}</Text>
        </CommentsPillStyled>
        <ArticleTitleStyled>{article.title}</ArticleTitleStyled>
      </ArticlePreviewInfosStyled>
      <Image style={{height: 15, marginRight: 15, alignSelf: 'center'}} source={require('../../../../../../assets/Path.png')}></Image>
    </ArticleItemStyled>
  )
}