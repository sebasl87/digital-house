import React, { useState, useMemo, useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens";
import { useFonts } from "expo-font";
import getTotal from "./src/utils";

import mainContext from "./context/mainContext";

function NewProduct() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>New User Screen</Text>
    </View>
  );
}
export default function App() {
  const Stack = createNativeStackNavigator();

  const [movements, setMovements] = useState(null);
  const getUrl = process.env.BASE_URL;

  const fetchData = async () => {
    const res = await fetch(getUrl);
    const data = await res.json();
    setMovements(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const points = useMemo(() => movements && getTotal(movements), [movements]);

  const [fontsLoaded] = useFonts({
    Avenir: require("./assets/fonts/AvenirLTStd-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <mainContext.Provider value={{ movements, points }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          options={{ headerShown: false }}
        >
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Product"
              component={NewProduct}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </mainContext.Provider>
  );
}
