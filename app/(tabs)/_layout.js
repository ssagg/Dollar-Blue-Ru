import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='home-analytics'
              size={32}
              color={color}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name='list'
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='calculator' size={28} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
