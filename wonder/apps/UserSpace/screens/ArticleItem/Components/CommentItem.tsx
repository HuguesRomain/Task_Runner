import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

import {Comment} from '../index'

const CommentStyled = styled.View`
  padding: 20px 0;
  flex-direction: row;
  border: none;
  border-bottom-width: 1px;
  border-color: #e8e8e8;
`;

const AuthorImageStyled = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 10px;
`;

const AuthorNameStyled = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

const CommentInfosStyled = styled.View`
  padding: 0 20px;
`;


export const CommentItem = ({ comment }: {comment: Comment}) => {

  return (
    <CommentStyled>
      <AuthorImageStyled source={{uri: comment.picture}}></AuthorImageStyled>
      <CommentInfosStyled>
        <AuthorNameStyled>{comment.author}</AuthorNameStyled>
        <Text>{comment.body}</Text>
      </CommentInfosStyled>
    </CommentStyled>
  );
}

