import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: "Курсы валют",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: "Montserrat_600SemiBold",
          },
        }}
      />
    </Stack>
  );
};
