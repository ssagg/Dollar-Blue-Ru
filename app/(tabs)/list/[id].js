import { View, Text } from "react-native";

import { useLocalSearchParams, Stack } from "expo-router";

const ListDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details ${id}` }} />
      <Text>My {id}</Text>
    </View>
  );
};
export default ListDetails;
