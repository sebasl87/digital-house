import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../../styles";
import TitleSection from "./TitleSection";

const MovTable = ({ movements }) => {
  return (
    <View style={styles.containerProductInfo}>
      <TitleSection text="Detalles del producto" />
      <Text style={[styles.monthBlueBox, { color: "#000" }]}>
        Comprado el 26 de enero, 2019
      </Text>
      <TitleSection
        style={{ marginBottom: 32 }}
        text="Con esta compra acumulaste"
      />
      <Text
        style={[
          styles.monthBlueBox,
          { color: "#000", fontSize: 24, lineHeight: 33 },
        ]}
      >
        100 puntos
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.monthBlueBox}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovTable;
