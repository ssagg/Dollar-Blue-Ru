import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: "#424750",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#424755",
    borderWidth: 2,
    borderStyle: "solid",
    height: 600,
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 60,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Montserrat_600SemiBold",
    color: "#C0C2C3",
  },
});

const Currencies = ({ course, number }) => {
  const names = [{ eur: "Euro Of" }, { eur: "Euro Blue" }];
  console.log(course);
  // console.log(number);
  return (
    <View style={styles.container}>
      <FlatList
        data={course}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                width: "60%",
              }}
            >
              <Text style={styles.text}>{item.nombre || item.name}</Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "column", width: "35%" }}
            >
              <Text style={styles.text}>
                $
                {item.venta ? (
                  <Text>
                    {number &&
                      (
                        ((item.venta + item.compra) / 2) *
                        number
                      ).toLocaleString()}
                  </Text>
                ) : (
                  <Text>
                    {number && (item.value_avg * number).toLocaleString()}
                  </Text>
                )}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.nombre || item.value_avg}
        contentContainerStyle={{ rowGap: "20px" }}
      />
    </View>
  );
};

export default Currencies;
