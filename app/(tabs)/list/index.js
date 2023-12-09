import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CountryFlag from "react-native-country-flag";
import { US } from "country-flag-icons/react/1x1";
import { EU } from "country-flag-icons/react/1x1";
import { RU } from "country-flag-icons/react/1x1";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useCurrencyStore } from "../../../store/Store";
import { useShallow } from "zustand/react/shallow";
import Currencies from "../../../components/Currencies/Currencies";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "gray",
    padding: 10,
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    color: "#C0C2C3",
  },
  tab: (isActiveCurrency, item) => ({
    width: 80,

    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:
      isActiveCurrency === item
        ? "rgba(117, 120, 138, 0.71)"
        : "rgba(69, 71, 81, 0.50)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.42,
    shadowRadius: 1.65,
    shadowColor: "rgba(0, 0, 0, 0.42)",
    backgroundColor:
      isActiveCurrency === item ? "#75788AB5" : "rgba(53, 58, 63, 0.58)",
    marginTop: 10,
  }),
  tabText: (isActiveCurrency, item) => ({
    fontSize: 18,
    display: "none",
    color: isActiveCurrency === item ? "#E5E5E5" : "rgba(229, 229, 229, 0.59)",
  }),
});

const List = () => {
  const fetchCurrencies = useCurrencyStore((state) => state.fetchCurrencies);
  const currenciesUsd = useCurrencyStore(
    useShallow((state) => state.currenciesUsd)
  );
  const currenciesEur = useCurrencyStore(
    useShallow((state) => state.currenciesEur)
  );
  console.log(currenciesUsd);
  console.log(currenciesEur);
  let EUR = currenciesEur;
  EUR.blue_euro.name = "Euro Blue";
  EUR.oficial_euro.name = "Euro Official";
  EUR = Object.values(currenciesEur);
  EUR.pop();
  EUR.shift();
  EUR.shift();
  console.log(EUR);
  const [number, onChangeNumber] = useState(1);
  const isLoading = false;
  const activeCurrency = ["USD", "EUR", "RUB", "ARS"];
  const [isActiveCurrency, setIsActiveCurrency] = useState("USD");
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#26272D",
        // backgroundColor: "rgb(242, 242, 242)",
      }}
    >
      <Pressable onPress={Keyboard.dismiss} accessible={false}>
        {isLoading ? (
          <ActivityIndicator size='large' color='black' />
        ) : (
          <View>
            {/* <Text
              style={{ fontSize: 20, fontWeight: 700, textAlign: "center" }}
            >
              Калькулятор
            </Text> */}
            <View style={{ alignSelf: "center", height: 80 }}>
              <FlatList
                data={activeCurrency}
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.tab(isActiveCurrency, item)}
                    onPress={() => setIsActiveCurrency(item)}
                  >
                    <Text style={styles.tabText(isActiveCurrency, item)}>
                      {item}
                    </Text>

                    {item === "EUR" ? (
                      <>
                        {/* <MaterialCommunityIcons
                          name='currency-eur'
                          size={34}
                          color='black'
                        /> */}
                        <CountryFlag
                          isoCode='eu'
                          size={35}
                          style={{ borderRadius: 10 }}
                        />
                      </>
                    ) : //<EU
                    //   title='EU'
                    //   style={{ width: 40, height: 40, borderRadius: 80 }}
                    // />
                    item === "USD" ? (
                      <>
                        {/* <MaterialCommunityIcons
                          name='currency-usd'
                          size={34}
                          color='black'
                        /> */}
                        <CountryFlag
                          isoCode='us'
                          size={35}
                          style={{ borderRadius: 10 }}
                        />
                      </>
                    ) : item === "ARS" ? (
                      // <US
                      //   title='US'
                      //   style={{ width: 44, height: 44, borderRadius: 80 }}
                      // />
                      // <MaterialCommunityIcons
                      //   name='currency-rub'
                      //   size={34}
                      //   color='black'
                      // />
                      <CountryFlag
                        isoCode='ru'
                        size={35}
                        style={{ borderRadius: 10 }}
                      />
                    ) : (
                      // <RU
                      //   title='RU'
                      //   style={{ width: 44, height: 44, borderRadius: 80 }}
                      // />
                      <CountryFlag
                        isoCode='AR'
                        size={35}
                        style={{ borderRadius: 10 }}
                      />
                    )}
                  </Pressable>
                )}
                keyExtractor={(item) => item}
                horizontal
                contentContainerStyle={{ columnGap: 10 }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "rgb(242, 242, 242)",
                backgroundColor: "#26272D",
                height: 100,
              }}
            >
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={
                  isActiveCurrency === "USD"
                    ? "USD"
                    : isActiveCurrency === "EUR"
                    ? "EUR"
                    : isActiveCurrency === "RUB"
                    ? "ARS"
                    : "RUB"
                }
                inputMode='numeric'
              />
              <Link href={"/animation"}>1</Link>
            </View>

            <Currencies
              course={
                isActiveCurrency === "USD"
                  ? currenciesUsd
                  : isActiveCurrency === "EUR"
                  ? EUR
                  : null
              }
              number={number}
            />
          </View>
        )}
      </Pressable>
    </SafeAreaView>
  );
};
export default List;
