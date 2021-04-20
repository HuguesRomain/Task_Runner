import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

const ViewStyle = styled.View`
  background-color: red;
`;

export const ArticlesView = () => {
  return (
    <ViewStyle>
      <Text>Les articles</Text>
    </ViewStyle>
  );
}

