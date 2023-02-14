import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  src: string;
  username: string;
};

const User = ({ src, username }: Props) => {
  return (
    <View className="flex flex-row items-center space-x-5 m-5">
      <Image
        source={{ uri: src }}
        className=" w-16 h-16 rounded-full border border-amber-500"
      />
      <Text className="text-3xl text-gray-200 font-bold">{username}</Text>
    </View>
  );
};

export default User;
