import React, { SetStateAction, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TravelersListView } from './screens/TravelersList';
import { MapViewComponent } from './screens/Map';
import { View, Text, Button, TextInput, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../../const';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from 'react-loader-spinner';

const Tab = createMaterialTopTabNavigator();


const HeaderHome = styled.View`
  display: flex;
  justify-content: center;
  height: 120px;
  background-color: ${color.main};
`
const InputStyled = styled.View`
  display: flex;
  flex-direction: row;
  background-color: white;
  margin: 50px 24px 0 24px;
  height: 48px;
  border-radius: 8px;
  padding: 0 10px;
`

const SearchIconWrapper = styled.View`
  display: flex;
  justify-content: center;
  width: 5%;
  margin-right: 10px;
`

const InputSearch = styled.TextInput`
  height: 100%;
  width: 90%;
`

export type ProfilesType = {
  id: number,
  name: string,
  email: string,
  city: string,
  address: string,
  phone:string,
  latitude: number,
  longitude: number
}

export const HomeView = () => {
  const [profiles, setProfiles] = useState<ProfilesType[]>();
  const [inputValue, setInputValue] = useState<string | undefined>()

  const getProfiles = () => {
    fetch('https://my-json-server.typicode.com/HuguesRomain/Task_Runner/users')
      .then( value => value.json())
      .then((resp) => setProfiles(resp))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfiles();
  }, []);


  const FilterProfile = inputValue ? profiles?.filter((profile) => profile.name.startsWith(inputValue)) : profiles

  
  return (
    <NavigationContainer>
      <HeaderHome>
        <InputStyled>
          <SearchIconWrapper>
            <Icon 
              name="search"
              size={20}
              color={color.text} 
            />
          </SearchIconWrapper>
          <InputSearch 
            onChangeText={setInputValue}
            placeholder="Search travelers"
          />  
        </InputStyled>
      </HeaderHome>     
      {profiles ? 
      <Tab.Navigator  
        tabBarOptions={{
          activeTintColor: 'white',
          indicatorStyle:{backgroundColor: "white"},
          labelStyle: { fontSize: 16 },
          style: { color: "white", backgroundColor: color.main, borderColor: "white" },
        }}>
          <Tab.Screen name="Travelers List"> 
            {props => <TravelersListView {...props} profiles={FilterProfile}/>}
          </Tab.Screen>
          <Tab.Screen name="Map">
            {props => <MapViewComponent {...props} profiles={FilterProfile}/>}
          </Tab.Screen>
        </Tab.Navigator> 
        : 
        <View style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <ActivityIndicator size="large" color={color.main} />
        </View>
        }  
    </NavigationContainer>
  );
}