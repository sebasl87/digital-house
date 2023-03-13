import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "../../styles";

function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        width: "100%",
        height: "100%",

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
        <View style={{ marginTop: 0, height: 220, backgroundColor: "green" }}>
          <Text style={styles.titleWelcomme}>Bienvenido de vuelta!</Text>
          <Text>Ruben Rodriguez</Text>
        </View>
        <View style={{ marginVertical: 20, backgroundColor: "blue" }}>
          <Text style={styles.titleSection}>TUS PUNTOS</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
