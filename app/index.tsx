import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function HomeScreen() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center ">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200 ">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with aora
          </Text>
          <CustomButton
            title="Continue With Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            textStyles=""
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "skyblue",
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
  },
});
