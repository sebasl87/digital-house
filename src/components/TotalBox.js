import React from "react";
import { View, Text } from "react-native";

import { styles } from "../../styles";

const TotalBox = ({ points }) => {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
      }}
    >
      <View style={styles.blueBox}>
        <Text style={styles.monthBlueBox}>Diciembre</Text>
        <View style={styles.totalContainerBox}>
          <Text style={styles.totalBlueBox}>
            {points && points.toString()}.00 pts
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TotalBox;
