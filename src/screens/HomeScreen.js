import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "../../styles";
import { TitleSection } from "../components";

function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 60,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View>
          <Text style={styles.titleWelcomme}>Bienvenido de vuelta!</Text>
          <Text>Ruben Rodriguez</Text>
        </View>
        <TitleSection text="TUS PUNTOS" />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
