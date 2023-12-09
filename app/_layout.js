import { SafeAreaProvider } from "react-native-safe-area-context";

import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
export { ErrorBoundary } from "expo-router";

// SplashScreen.preventAutoHideAsync();

// export default RootLayout = () => {
//   const [loaded, error] = useFonts({
//     //
//     // mon: require("../../assets/fonts/Montserrat-Regular.ttf"),
//     "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
//     "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
//   });
//   useEffect(() => {
//     if (error) throw error;
//   }, [error]);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }
//   return <RootLayoutNav />;
// };
const RootLayoutNav = () => {
  return (
    // <SafeAreaProvider>
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='modal' />
    </Stack>
    // </SafeAreaProvider>
  );
};
export default RootLayoutNav;
