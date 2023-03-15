import React, { useContext } from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import mainContext from "../../context/mainContext";

import { TitleSection, TotalBox, MovTable } from "../components";

function HomeScreen() {
  const { movements, points, styles } = useContext(mainContext);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: Platform.OS === "ios" ? 60 : 10,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <View style={{ width: "100%", alignItems: "flex-start" }}>
          <Text style={styles.titleWelcomme}>Bienvenido de vuelta!</Text>
          <Text>Ruben Rodriguez</Text>
        </View>
        <TitleSection text="TUS PUNTOS" />
        <TotalBox points={points} />
        <TitleSection text="TUS MOVIMIENTOS" />
        <MovTable movements={movements} />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
