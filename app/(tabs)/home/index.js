import React, { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import Card from "../../../components/Card/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../../../styles/home.style";
import { useCurrencyStore } from "../../../store/Store";
import { Link } from "expo-router";
const Home = () => {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const {
    isLoading,
    error,
    fetchCurrenciesUsd,
    fetchCurrenciesEur,
    fetchEvolution,
  } = useCurrencyStore((state) => ({
    isLoading: state.isLoading,
    error: state.error,
    fetchCurrenciesUsd: state.fetchCurrenciesUsd,
    fetchCurrenciesEur: state.fetchCurrenciesEur,
    fetchEvolution: state.fetchEvolution,
  }));
  const currenciesUsd = useCurrencyStore(
    useShallow((state) => state.currenciesUsd)
  );
  const currenciesEur = useCurrencyStore(
    useShallow((state) => state.currenciesEur)
  );
  // const evolutionData = useCurrencyStore(
  //   useShallow((state) => state.evolution)
  // );
  const [time, setTime] = useState("");

  useEffect(() => {
    fetchCurrenciesUsd();
    fetchCurrenciesEur();
    // fetchEvolution();

    // fetch(baseUrlDolarApi).then((resp) =>
    //   resp.json().then((data) => {
    //     const time = data[0].fechaActualizacion
    //       .replace(/T/g, " ")
    //       .replace(/.000Z/g, "");

    //     setTime(time);
    //     console.log(data);
    //     setCourse(data);
    //   })
    // );
  }, []);
  // let arr = evolutionData.filter((item) => item.source === "Blue");
  // const myData = arr.map(({ value_sell: value, ...rest }) => ({
  //   value,
  //   ...rest,
  // }));
  // console.log(arr);
  // console.log(myData);
  console.log(currenciesUsd);
  console.log(currenciesEur);
  // console.log(evolutionData);
  const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: "#fff",
      fontSize: 16,
    },
  });

  const insets = useSafeAreaInsets();

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View>
      <View
        style={{
          height: "100%",
          margin: 0,
          backgroundColor: "#26272D",
          // backgroundColor: "#353A40"
        }}
      >
        {isLoading ? (
          <ActivityIndicator size='large' color='black' />
        ) : (
          <FlatList
            data={currenciesUsd}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.nombre}
            contentContainerStyle={{ columnGap: "10px" }}
          />
        )}
      </View>
      {/* </View> */}
    </View>
  );
};
export default Home;
