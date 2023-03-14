import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import mainContext from "../../context/mainContext";

import { styles } from "../../styles";
import { TitleSection, TotalBox } from "../components";

function HomeScreen() {
  const { movements, points } = useContext(mainContext);
  // console.log(points.toLocaleString("en"));
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
        <TotalBox points={points} />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
