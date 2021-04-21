import React from 'react';

import styled from 'styled-components/native';

const CommentInputStyled = styled.View`
  flex-direction: row;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  border-color: #e8e8e8;
`;

const InputStyled = styled.TextInput`
  flex: 4;
`

const AddBtnStyled = styled.Button`
  border-radius: 20px;
  background-color: pink;
`


export const CommentInput = ({ ...props }) => {

  const [text, onChangeText] = React.useState("");

  const addComment = () => {
    props.onAddComment({author: 'Arnold', picture: 'test', body: text})
  }

  return (
    <CommentInputStyled>
      <InputStyled placeholder="Add a comment" onChangeText={onChangeText} value={text}></InputStyled>
        <AddBtnStyled title='+' onPress={addComment} color="#FF5F91"></AddBtnStyled>
    </CommentInputStyled>
  );
}

