import React from "react";
import { View, Text } from "react-native";

import { styles } from "../styles";

const TitleSection = ({ text }) => {
  return (
    <View
      style={{ marginVertical: 20, alignItems: "flex-start", width: "100%" }}
    >
      <Text style={styles.titleSection}>{text}</Text>
    </View>
  );
};

export default TitleSection;
