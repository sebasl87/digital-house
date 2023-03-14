import React from "react";
import { View, Text } from "react-native";

import { styles } from "../../styles";

const TotalBox = ({ text }) => {
  return (
    <View
      style={{
        marginHorizontal: 54,
        width: "100%",
      }}
    >
      <View style={styles.blueBox}>
        <Text>Diciembre</Text>
        <Text>10,000 pts</Text>
      </View>
    </View>
  );
};

export default TotalBox;
