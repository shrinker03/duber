import React from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{
        width: '90%',
        height: '100%',
      }}
      tintColor="black"
      // mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
