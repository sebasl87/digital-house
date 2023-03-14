import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "../../styles";
import { formatDate } from "../utils";

const RowTable = ({ product, points, isRedemption, date, image }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Product", {
          product,
          points,
          isRedemption,
          date,
          image,
        });
      }}
    >
      <View style={styles.rowTable}>
        <Image
          source={{ uri: image }}
          style={{ width: 55, height: 55, borderRadius: 10 }}
        />
        <View style={{ marginLeft: 12, width: 200 }}>
          <Text
            style={[styles.titleSection, { color: "#000", marginVertical: 5 }]}
          >
            {product}
          </Text>
          <Text style={[styles.dateText, { marginTop: 2 }]}>
            {formatDate(date)}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {isRedemption ? (
            <Text style={[styles.monthBlueBox, { color: "#FF0000" }]}>-</Text>
          ) : (
            <Text style={[styles.monthBlueBox, { color: "#00B833" }]}>+</Text>
          )}
          <Text style={[styles.monthBlueBox, { color: "#000" }]}>{points}</Text>
          <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
            <Text
              style={[styles.monthBlueBox, { color: "#000", marginLeft: 8 }]}
            >
              &gt;
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );};

export default RowTable;
