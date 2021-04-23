import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InfosView } from './screens/Infos';
import { BucketListView } from './screens/BucketList/index';
import { AlbumsView } from './screens/Albums/index';
import { PhotosView } from './screens/Photos/index';
import { ArticleView } from './screens/Articles/index';
import { ArticleItemView } from './screens/ArticleItem';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import { color } from '../../const';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const HeaderStyled = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.main};
  height: 200px;
`

const ProfilePic = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 16px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`

const Tab = createMaterialTopTabNavigator();

export const ProfileView = ({...props}: any) => {
  const profile = props.route.params.profile
  return (
    <>
      <HeaderStyled>
        <ProfilePic source={{ uri: profile && profile.picture }} />
        <Name>{profile.name}</Name>
      </HeaderStyled>
      <Tab.Navigator tabBarOptions={{
          activeTintColor: 'white',
          indicatorStyle:{backgroundColor: "white"},
          labelStyle: { fontSize: 12 },
          style: { color: "white", backgroundColor: color.main, borderColor: "white" },
        }} initialRouteName="Infos">
        <Tab.Screen name="Infos">
          {props => <InfosView {...props} profile={profile}/>}
        </Tab.Screen>
        <Tab.Screen name="BucketList" component={BucketListView} />
        <Tab.Screen name="Albums" component={AlbumsView} />
        <Tab.Screen name="Articles" component={ArticleView} />
      </Tab.Navigator>
    </>
  );
}