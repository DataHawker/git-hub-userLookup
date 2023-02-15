import { View, Text } from "react-native";
import React from "react";
import { Data } from "../App";

type Props = {
  data: Data;
};

const Card = ({
  number,
  text,
  ...other
}: {
  number: string | number;
  text: string;
  [other: string]: any; // This is a hack to allow any other props to be passed to the component such as className
}) => {
  return (
    <View
      className="flex items-center justify-center rounded-md w-36 h-36"
      {...other}
    >
      <View>
        <Text className="text-gray-50 font-semibold text-center">{number}</Text>
        <Text className="text-gray-400 font-bold mt-4 text-center">{text}</Text>
      </View>
    </View>
  );
};

const CardList = ({ data }: Props) => {
  return (
    <View className="flex flex-row gap-5 flex-wrap m-5">
      <Card
        text="Public repos"
        number={data.public_repos}
        className="bg-black"
      />
      <Card text="Following" number={data.following} className="bg-black" />
      <Card text="Followers" number={data.followers} className="bg-black" />
      <Card text="Member Since" number={data.created_at} className="bg-black" />
    </View>
  );
};

export default CardList;
