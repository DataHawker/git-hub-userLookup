import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

type Props = {
  onSearch: Function;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUsername] = useState<string>("");
  return (
    <View className="flex flex-row space-x-4 mt-4 p-2 justify-center">
      <View className="border border-gray-100 w-2/3  rounded-md bg-gray-800">
        <TextInput
          placeholder="Find User..."
          onChangeText={(text) => setUsername(text)}
          placeholderTextColor="#f0f0f088"
          className="text-xl text-white p-2 ml-2"
        />
      </View>
      <Pressable
        className="bg-sky-600 px-7 py-3 rounded-md"
        onPress={() => onSearch(username)}
      >
        <Text className="text-gray-50 text-lg">Search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBox;
