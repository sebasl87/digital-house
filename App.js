import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens";
import { useFonts } from "expo-font";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    Avenir: require("./assets/fonts/AvenirLTStd-Black.otf"),
  });

  function NewProduct() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>New User Screen</Text>
      </View>
    );
  }
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" options={{ headerShown: false }}>
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
  );
}
