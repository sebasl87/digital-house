import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import mainContext from "../../context/mainContext";

import { TitleSection, TotalBox, MovTable } from "../components";

function HomeScreen() {
  const { movements, points, styles } = useContext(mainContext);
  const [filterMovs, setFilterMovs] = useState();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: Platform.OS === "ios" ? 80 : 10,
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
        <MovTable movements={filterMovs || movements} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setFilterMovs(movements.filter((m) => !m.is_redemption))
          }
        >
          <Text style={styles.monthBlueBox}>Ganadados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setFilterMovs(movements.filter((m) => m.is_redemption))
          }
        >
          <Text style={styles.monthBlueBox}>Canjeados</Text>
        </TouchableOpacity>
        {filterMovs && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFilterMovs()}
          >
            <Text style={styles.monthBlueBox}>Todos</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
