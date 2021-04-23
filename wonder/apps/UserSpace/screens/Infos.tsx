import React, { useEffect, useState }  from 'react';
import { View, Text } from 'react-native';


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
  padding: 20px 0;
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

export const InfosView = () => {
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

  return (
    <ContentInfo>
      <Content>
        <Legend>NAME</Legend>
        <Info>{userInfo && userInfo.name}</Info>
      </Content>
      <Content>
        <Legend>EMAIL</Legend>
        <Info>{userInfo && userInfo.email}</Info>
      </Content>
      <Content>
        <Legend>ADDRESS</Legend>
        <Info>{userInfo && userInfo.address}</Info>
      </Content>
      <Content>
        <Legend>PHONE NUMBER</Legend>
        <Info>{userInfo && userInfo.phone}</Info>
      </Content>
    </ContentInfo>
  );
}


