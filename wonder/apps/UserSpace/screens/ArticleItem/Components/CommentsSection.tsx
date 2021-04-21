import React from 'react';
import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { CommentItem } from './CommentItem'

import {Comment} from '../index'

const CommentsSectionStyled = styled.View`
  flex: 1
`;

const CommentsLengthStyled = styled.Text`
  background-color: #FFE5ED;
  padding: 20px;
  margin: 10px -20px 0 -20px;
`;

export const CommentsSection = ({ comments }: {comments: Comment[]}) => {

  return (
    <CommentsSectionStyled>
      <CommentsLengthStyled>{'Comments ' + comments.length}</CommentsLengthStyled>
      <FlatList
        data={comments}
        renderItem={({ item }: { item: Comment }) => <CommentItem comment={item}/>}
        keyExtractor={(item, index) => `${item.author}${index}`}
      />
    </CommentsSectionStyled>
  );
}

