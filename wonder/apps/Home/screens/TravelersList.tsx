import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const ViewSytle = styled.View`
  background-color: red;
`;

export const TravelersListView = () => {
  return (
    <ViewSytle>
      <Text>Hello World</Text>
    </ViewSytle>
  );
}


