import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import SearchBox from "./components/SearchBox";
import User from "./components/User";

type Data = {
  avatar_url: string;
  folowers: number | string;
  following: number | string;
  login: string;
  public_repos: number | string;
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
    <SafeAreaView className="bg-black flex-1">
      <ScrollView keyboardShouldPersistTaps="handled" className="h-screen px-2">
        <SearchBox onSearch={search} />
        {data && <User src={data.avatar_url} username={data.login} />}
      </ScrollView>
    </SafeAreaView>
  );
}