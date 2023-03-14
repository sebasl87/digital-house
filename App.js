import React, { useState, useMemo, useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProductDetail } from "./src/screens";
import { useFonts } from "expo-font";
import { getTotal } from "./src/utils";
import { HeaderTitle } from "@react-navigation/elements";
import { BASE_URL } from "@env";
import { styles } from "./styles";

import mainContext from "./context/mainContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [movements, setMovements] = useState(null);

  const fetchData = async () => {
    const res = await fetch(BASE_URL);
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
    <mainContext.Provider value={{ movements, points, styles }}>
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
              component={ProductDetail}
              options={{
                header: (props) => (
                  <View style={{ height: 150, backgroundColor: "#CFD6FF" }}>
                    <HeaderTitle
                      style={{
                        bottom: 0,
                        flex: 1,
                        height: "100%",
                        marginBottom: 24,
                        marginLeft: 20,
                        marginTop: 102,
                      }}
                    >
                      {props.route.params.product}
                    </HeaderTitle>
                  </View>
                ),
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </mainContext.Provider>
  );
}
