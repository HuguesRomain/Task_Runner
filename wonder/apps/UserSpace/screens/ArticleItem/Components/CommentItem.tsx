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
      <AuthorImageStyled source={{uri: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}}></AuthorImageStyled>
      <CommentInfosStyled>
        <AuthorNameStyled>Le Nom</AuthorNameStyled>
        <Text>{comment.body}</Text>
      </CommentInfosStyled>
    </CommentStyled>
  );
}

