import React from 'react';
import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { CommentItem } from './CommentItem'
import { CommentInput } from './CommentInput'

import {Comment} from '../index'

const CommentsSectionStyled = styled.View`
`;

const CommentsLengthStyled = styled.Text`
  background-color: #FFE5ED;
  padding: 20px;
  margin: 10px -20px 0 -20px;
`;

export const CommentsSection = ({...props}) => {

  const handleCommentAdd = (comment: Comment): void => {
    props.onAddComment(comment)
    console.log(props.comments)
  }

  return (
    <CommentsSectionStyled>
      <CommentsLengthStyled>{'Comments ' + props.comments.length}</CommentsLengthStyled>
      {props.comments.map((comment: Comment, index: number) => {return (<CommentItem comment={comment} key={`comment${index}`}/> )})}
      <CommentInput onAddComment={handleCommentAdd}></CommentInput>
    </CommentsSectionStyled>
  );
}

