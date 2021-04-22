import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import { ProfilesType } from '..';
import { color } from '../../../const';


const TravelItemWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #FFE5ED;
  width: 370px;
  margin: 10px 0;
  padding: 18px 16px; 
  border-radius: 16px;
 ` 

const ContentTravelItemWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PicAndName = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Pic = styled.View`
  height: 48px;
  width: 48px;
  background-color: grey;
  border-radius: 16px;
  margin-right: 10px;
`

const ProfilePic = styled.Image`
  width: 100%;
  height: 156px;
  border-radius: 16px;
`;



const MailAndPlace = styled.View`
  display: flex;
  height: 50%;
  justify-content: space-around;
`
const IconAndText = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${color.title};
`

const TextInfo = styled.Text`
  font-size: 12px;
  color: ${color.text};
`;

const TravelerItem = ({ profile }: {profile: ProfilesType}) => {
  return (
    <TravelItemWrapper>
      <ContentTravelItemWrapper>
        <PicAndName>
          <Pic />
          <ProfilePic
            source={{ uri: profile && profile.picture }}
          />
          <Name>{profile.name}</Name>
        </PicAndName>
        <MailAndPlace>
          <IconAndText>
          <Icon
            style={{ marginRight: 10 }}
            name="envelope"
            size={15}
            color="#FF5F91"
          />
          <TextInfo>{profile.email}</TextInfo>
          </IconAndText>
          <IconAndText>
            <Icon
              style={{ marginRight: 10 }}
              name="map-marker"
              size={15}
              color="#FF5F91"
            />
            <TextInfo>{profile.city}</TextInfo>
          </IconAndText>
        </MailAndPlace>
      </ContentTravelItemWrapper>
      <Icon
        name="chevron-right"
        size={15}
        color={color.title}
      />
    </TravelItemWrapper>
  )
}


const ItemsWrapper = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`


export const TravelersListView = ({...props}: any) => {
  return (
    <ItemsWrapper>
      <FlatList
        data={props.profiles}
        renderItem={({ item }: { item: ProfilesType }) => <TravelerItem profile={item}/>}
        keyExtractor={item => item.id}
      />
    </ItemsWrapper>
  );
}


