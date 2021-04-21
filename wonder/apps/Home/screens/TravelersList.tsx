import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';



const TravelerItemWrapper = styled.View`
  background-color: #FFE5ED;
  height: 50px;
  width: 370px;
  margin: 10px 0;
`

const PicAndName = styled.View`
  display: flex;
  flex-direction: row;
`

const Pic = styled.View`
  height: 48px;
  width: 48px;
  background-color: grey;
  margin: 0 10px;
`

const TravelerItem = () => {
  return (
    <TravelerItemWrapper>
      <PicAndName>
        <Pic />
        <Text>Username</Text>
      </PicAndName>
    </TravelerItemWrapper>
  )
}


const ItemsWrapper = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`

const DATA = [
  {
    Fid: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    Name: 'irst Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


export const TravelersListView = () => {
  return (
    <ItemsWrapper>
      <FlatList
        data={DATA}
        renderItem={TravelerItem}
        keyExtractor={item => item.id}
      />
    </ItemsWrapper>
  );
}


