import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components';
import { ProfilesType } from '..';
import { MarkerComponent } from '../components/atoms/Marker';

const MapStyled = styled(MapView)`
  height: 100%;
  width: 100%;
`

const MarkerStyled = styled(Marker)`
  width: 30px;
  height: 37px;
`

export const MapViewComponent = ({...props}: any) => {
  return (
    <MapStyled
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {props.profiles.map((profile: ProfilesType) => {
        return(
          <MarkerStyled 
            coordinate={{ latitude : profile.latitude , longitude : profile.latitude }} 
            image={require("../components/atoms/marker.png")}
          />
        )
      })}
      
    </MapStyled>
  );
}


