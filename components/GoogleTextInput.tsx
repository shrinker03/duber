import { icons } from '@/constants';
import { GoogleInputProps } from '@/types/type';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import uuid from 'react-native-uuid';

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const GoogleTextInput = ({
  handlePress,
  containerStyle,
  icon,
  initialLocation,
  textInputBackgroundColor,
}: GoogleInputProps) => {
  console.log(googlePlacesApiKey, 'googlePlacesApiKey===>');

  const requestId = uuid.v4();

  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
    >
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Where you want to go?"
        debounce={250}
        styles={{
          textInputContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            position: 'relative',
            shadowColor: '#d4d4d4',
          },
          textInput: {
            backgroundColor: textInputBackgroundColor,
            fontSize: 16,
            fontWeight: 600,
            marginTop: 5,
            width: '100%',
            borderRadius: 200,
          },
          listView: {
            backgroundColor: textInputBackgroundColor
              ? textInputBackgroundColor
              : 'white',
            position: 'relative',
            top: 0,
            width: '100%',
            borderRadius: 10,
            shadowColor: '#d4d4d4',
            zIndex: 99,
          },
        }}
        onPress={(data, details = null) => {
          handlePress({
            address: data.description,
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
          });
        }}
        query={{
          key: googlePlacesApiKey,
          language: 'en',
        }}
        renderLeftButton={() => (
          <View className="justify-center items-center w-6 h-6">
            <Image
              source={icon ? icon : icons.search}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </View>
        )}
        textInputProps={{
          placeholderTextColor: 'gray',
          placeholder: initialLocation ?? 'Where do you want to go?',
        }}
        requestUrl={{
          url: 'https://api.olamaps.io/places/v1/autocomplete',
          useOnPlatform: 'all',
        }}
      />
    </View>
  );
};

export default GoogleTextInput;
