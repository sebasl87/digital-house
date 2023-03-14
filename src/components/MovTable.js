import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "../../styles";

const MovTable = ({ points }) => {
  return (
    <View style={styles.table}>
      <View style={styles.rowTable}>
        <Image
          source={{ uri: "https://loremflickr.com/640/480/transport" }}
          style={{ width: 55, height: 55, borderRadius: 10 }}
        />
        <View style={{ marginLeft: 12, marginRight: 80 }}>
          <Text
            style={[styles.titleSection, { color: "#000", marginVertical: 5 }]}
          >
            Nombre del producto
          </Text>
          <Text style={[styles.dateText, { marginTop: 2 }]}>
            26 de enero, 2019
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={[styles.monthBlueBox, { color: "#00B833" }]}>+</Text>
          <Text style={[styles.monthBlueBox, { color: "#000" }]}>100</Text>
          <Text style={[styles.monthBlueBox, { color: "#000", marginLeft: 20 }]}>&gt;</Text>
        </View>
      </View>
    </View>
  );
};

export default MovTable;
