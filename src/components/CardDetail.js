import React from "react";
import { View, Text } from "react-native";

import { styles } from "../../styles";
import { formatDate } from "../utils";
import TitleSection from "./TitleSection";

const MovTable = ({ product, points, isRedemption, date }) => {
  return (
    <View style={styles.containerProductInfo}>
      <TitleSection text="Detalles del producto" />
      <Text style={[styles.monthBlueBox, { color: "#000" }]}>
        Comprado el {formatDate(date)}
      </Text>
      <TitleSection
        style={{ marginBottom: 32 }}
        text={
          isRedemption
            ? "Con esta compra utilizaste"
            : "Con esta compra acumulaste"
        }
      />
      <Text
        style={[
          styles.monthBlueBox,
          { color: "#000", fontSize: 24, lineHeight: 33 },
        ]}
      >
        {points} puntos
      </Text>
    </View>
  );
};

export default MovTable;
