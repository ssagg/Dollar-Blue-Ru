import { Stack } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { View, Text } from "react-native";

const AnimationSplashScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LottieView
        autoPlay
        style={{
          width: "80%",
          maxWidth: 400,
          //   height: 200,
          backgroundColor: "#eee",
        }}
        source={require("../assets/lottie/Initial_animation.json")}
      />
    </View>
  );
};

export default AnimationSplashScreen;
