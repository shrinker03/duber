import { ButtonProps } from '@/types/type';
import { Text, TouchableOpacity } from 'react-native';

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-gray-500';
    case 'danger':
      return 'bg-red-500';
    case 'success':
      return 'bg-green-500';
    case 'outline':
      return 'bg-transparent border-neutral-300 border-[0.5px]';
    default:
      return 'bg-[#0286ff]';
  }
};

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return 'text-black';
    case 'secondary':
      return 'text-grey-100';
    case 'danger':
      return 'text-red-500';
    case 'success':
      return 'text-green-500';
    default:
      return 'text-white';
  }
};

export default ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  const bgVariantProps = getBgVariantStyle(bgVariant);
  const textVariantProps = getTextVariantStyle(textVariant);

  console.log(bgVariantProps, 'bgVariantProps==>');

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full flex justify-center items-center shadow-md shadow-neutral-400/70 ${bgVariantProps} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${textVariantProps}`}>{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};
