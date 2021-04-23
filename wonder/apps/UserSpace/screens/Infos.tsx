import React, { useEffect, useState }  from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


import styled from 'styled-components/native';

export type ProfilesType = {
  id: number,
  name: string,
  email: string,
  picture: string,
  city: string,
  address: string,
  phone:string,
  latitude: number,
  longitude: number
}

const ContentInfo = styled.View`
  background-color: white;
  padding: 20px 10px;
`;

const Content = styled.View`
  padding: 10px;
`;

const Legend = styled.Text`
  color:#FF5F91;
  font-size: 14px;
  font-weight: bold;
`;

const Info = styled.Text`
  color: #1F2557;
  padding: 5px 0;
`;

export const InfosView = ({...props}: any) => {
  const [userInfo, setUserInfo] = useState<ProfilesType>();
  const getUsersInfo = () => {
    fetch(`https://my-json-server.typicode.com/HuguesRomain/Task_Runner/users?id=${1}`)
        .then( value => value.json())
        .then((resp) => {
          setUserInfo(resp[0]);
        })
        .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsersInfo();
  }, []);

  const MapStyled = styled(MapView)`
  height: 100%;
  width: 100%;
`

const MarkerStyled = styled(Marker)`
  width: 30px;
  height: 37px;
`

  return (
    <>
    <ContentInfo>
      <Content>
        <Legend>NAME</Legend>
        <Info>{userInfo && props.profile.name}</Info>
      </Content>
      <Content>
        <Legend>EMAIL</Legend>
        <Info>{userInfo && props.profile.email}</Info>
      </Content>
      <Content>
        <Legend>ADDRESS</Legend>
        <Info>{userInfo && props.profile.address}</Info>
      </Content>
      <Content>
        <Legend>PHONE NUMBER</Legend>
        <Info>{userInfo && props.profile.phone}</Info>
      </Content>
    </ContentInfo>
    <MapStyled
      initialRegion={{
        latitude: props.profile.latitude,
        longitude: props.profile.longitude,
        latitudeDelta: 2.9922,
        longitudeDelta: 2.9421,
      }}
    >
      <MarkerStyled 
        coordinate={{ latitude : props.profile.latitude , longitude : props.profile.longitude }} 
        image={require("../../Home/components/atoms/marker.png")}
      />
    </MapStyled>
    </>
  );
}


