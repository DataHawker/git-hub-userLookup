import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

type Props = {
  src: string;
  username: string;
};

const User = ({ src, username }: Props) => {
  return (
    <View className="flex flex-row items-center space-x-4 m-3 mb-5">
      <View className="h-20 w-20 rounded-full bg-white" style={styles.shadow}>
        <Image
          source={{ uri: src }}
          className=" w-20 h-20 rounded-full border border-white"
        />
      </View>
      <View className="flex-col">
        <Text className="text-2xl text-gray-200 font-bold">{username}</Text>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#214f94",
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.32,

    elevation: 16,
  },
});
