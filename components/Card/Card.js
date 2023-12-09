import React from "react";
import { Pressable, View, Text } from "react-native";
import { router } from "expo-router";
import styles from "./Card.style";

const Card = ({ item }) => {
  // console.log(item);
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/home/${item.nombre}`)}
    >
      <View style={{ width: "40%" }}>
        <Text style={styles.text}>
          {item.nombre === "Contado con liquidación" ? "CCL" : item.nombre}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          width: "60%",
        }}
      >
        <Text
          style={{
            textAlign: "right",
            fontSize: 18,
            fontFamily: "Montserrat_600SemiBold",
            color: "#C0C2C3",
          }}
        >
          $ {item.compra} - {item.venta}
        </Text>

        {/* <Text> Продажа {item.venta}</Text> */}
      </View>
    </Pressable>
  );
};

export default Card;
