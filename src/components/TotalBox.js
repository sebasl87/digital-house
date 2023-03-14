import React from "react";
import { View, Text } from "react-native";

import { styles } from "../../styles";

const TotalBox = ({ points }) => {
  return (
    <View
      style={{
        marginHorizontal: 54,
        width: "100%",
      }}
    >
      <View style={styles.blueBox}>
        <Text style={styles.monthBlueBox}>Diciembre</Text>
        <Text style={styles.totalBlueBox}>{points.toString()}.00 pts</Text>
      </View>
    </View>
  );
};

export default TotalBox;
