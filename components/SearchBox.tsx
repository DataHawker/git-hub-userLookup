import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import * as Haptics from "expo-haptics";

type Props = {
  onSearch: Function;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUsername] = useState("");

  return (
    <View className="flex flex-row space-x-4 mt-4 p-2 justify-center py-3">
      <View className="border border-white w-2/3  rounded-md bg-gray-800 flex justify-center pl-4 pb-1.5">
        <TextInput
          placeholder="Find User..."
          placeholderTextColor="#f0f0f088"
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="search"
          onSubmitEditing={() =>
            Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Success
            ).then(() => onSearch(username))
          }
          className="text-2xl text-white"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View className="relative font-thin text-xl">
        <View className="absolute inset-x-0  rounded-lg"></View>
        <Pressable
          className="relative bg-blue-500 border border-white rounded-lg py-3 px-7"
          onPress={() =>
            Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Success
            ).then(() => onSearch(username))
          }
        >
          <Text className="text-gray-100 text-xl font-thin">Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SearchBox;
