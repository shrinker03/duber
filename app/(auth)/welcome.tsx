import { onboarding } from '@/constants';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

export default () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace('/(auth)/sign-up');
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-8 h-1 mx-1 bg-[#E2E8F0]" />}
        activeDot={<View className="w-8 h-1 mx-1 bg-[#0286FF]" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map(({ image, id, title, description }) => (
          <View key={id} className="flex items-center justify-center p-5">
            <Image
              source={image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />

            <View className="flex items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {title}
              </Text>
            </View>

            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {description}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};
