import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  src: string;
  username: string;
  name: string;
};

const User = ({ src, username, name }: Props) => {
  return (
    <View className="flex flex-row items-center space-x-4 m-3 mb-5">
      <Image
        source={{ uri: src }}
        className=" w-20 h-20 rounded-full border border-white"
      />
      <View className="flex-col">
        <Text className="text-2xl text-gray-500 font-bold">{username}</Text>
      </View>
    </View>
  );
};

export default User;
