import React from 'react';
import { Text  } from 'react-native';

import styled from 'styled-components/native';


const CommentsPillStyled = styled.View`
  background-color: #FFE5ED;
  border-radius: 100px;
  padding: 8px 10px;
  width: 110px;
  margin-bottom: 10px;
  align-items: center;
`


export const CommentsPill = ({...props}) => {
  const commentsLength: number = props.commentsLength
  return (
    <CommentsPillStyled>
      <Text style={{color: '#FF5F91'}}>{commentsLength + ' Comments'}</Text>
    </CommentsPillStyled>
  )
}