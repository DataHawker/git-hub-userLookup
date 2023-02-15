import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Data } from "../App";

type Props = {
  data: Data;
};

const Card = ({
  number,
  text,
  text2,
  num2,
  ...other
}: {
  number?: string | number;
  text?: string | number;
  text2?: string | number;
  num2?: string | number;
  [other: string]: any; // This is a hack to allow any other props to be passed to the component such as className
}) => {
  return (
    <View className="flex rounded-md w-36 h-36" {...other}>
      <View
        className="items-center relative w-36 h-36 bg-black"
        style={styles.shadow}
      >
        <Text className="text-gray-50 text-3xl font-semibold absolute top-10 center-0">
          {number}
        </Text>
        <Text className="text-gray-50 text-xl font-semibold text-center absolute top-7 center-0">
          {num2}
        </Text>
        <Text className="text-gray-400 font-bold  absolute bottom-7 center-0">
          {text}
        </Text>
        <Text className="text-gray-400 font-bold absolute bottom-7 center-0 ">
          {text2}
        </Text>
      </View>
    </View>
  );
};

const CardList = ({ data }: Props) => {
  return (
    <View className="flex flex-row gap-5 flex-wrap items-center justify-center mt-5">
      <Card
        text="Public repos"
        number={data.public_repos}
        className="bg-black opacity-50"
      />
      <Card
        text="Following"
        number={data.following}
        className="bg-black opacity-50"
      />
      <Card
        text="Followers"
        number={data.followers}
        className="bg-black opacity-50"
      />
      <Card
        text2="Member Since"
        num2={new Date(data.created_at).toDateString()}
        className="bg-black opacity-50"
      />
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "rgb(64, 103, 162)",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.32,

    elevation: 10,
  },
});
