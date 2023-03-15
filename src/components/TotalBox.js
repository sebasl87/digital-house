import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { styles } from "../styles";

const TotalBox = ({ points }) => {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
      }}
    >
      {points ? (
        <View style={styles.blueBox}>
          <Text style={styles.monthBlueBox}>Diciembre</Text>
          <View style={styles.totalContainerBox}>
            <Text style={styles.totalBlueBox}>
              {points && points.toString()}.00 pts
            </Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator color="#334FFA"/>
      )}
    </View>
  );
};

export default TotalBox;
