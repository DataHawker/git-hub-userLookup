import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import User from "./components/User";

export type Data = {
  avatar_url: string;
  followers: number | string;
  following: number | string;
  login: string;
  public_repos: number | string;
  created_at: string | number;
};

export default function App() {
  const [data, setData] = useState<Data>();

  const search = useCallback((searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please enter someting");
      return;
    }

    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data), setData(data);
      });
  }, []);
  return (
    <View className="h-screen bg-gray-500">
      <View className="sticky top-0 left-0 h-10 w-full backdrop-blur-sm bg-gray-500"></View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        className=" px-5 pt-10  flex-2"
      >
        <SearchBox onSearch={search} />
        {data && (
          <>
            <User src={data.avatar_url} username={data.login} />
            <CardList data={data} />
          </>
        )}
      </ScrollView>
    </View>
  );
}
