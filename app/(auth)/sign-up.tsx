import InputField from '@/components/InputField';
import CutomButton from '@/components/CutomButton';
import { icons, images } from '@/constants';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import OAuth from '@/components/OAuth';

export default () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onSignUpPress = () => {
    console.log('sign up');
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="relative w-full h-[250px]">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CutomButton
            title="Sign up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{' '}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};
