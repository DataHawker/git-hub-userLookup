import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import * as Haptics from "expo-haptics";

type Props = {
  onSearch: Function;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUsername] = useState("");

  return (
    <>
      <View>
        <Text
          className="bg-gray-900 p-3 shadow-md rounded-md font-bold text-gray-200 text-center text-3xl "
          style={styles.shadow}
        >
          Enter GitHub Username
        </Text>
      </View>
      <View
        className="flex flex-row space-x-4 mt-4 mb-4 p-1 justify-center py-3"
        style={styles.shadow}
      >
        <View
          className=" shadow w-2/3 rounded-md bg-slate-600  flex justify-center pl-4 pb-1.5"
          style={styles.shadow}
        >
          <TextInput
            placeholder="Find User..."
            placeholderTextColor="#9c9c9c"
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
            className="relative bg-blue-500 rounded-lg py-3 px-7"
            style={styles.shadow}
            onPress={() =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )
                .then(() => onSearch(username))
                .then(() => Keyboard.dismiss())
                .then(() => setUsername("placeholder"))
            }
          >
            <Text className="text-gray-100 text-xl" style={styles.shadow}>
              Search
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#4067a2",
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.14,
    shadowRadius: 5.32,

    elevation: 16,
  },
});
