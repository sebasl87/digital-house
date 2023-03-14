import React, { useContext } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import mainContext from "../../context/mainContext";

function ProductDetail() {
  const { movements, points, styles } = useContext(mainContext);
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        width: "100%",
      }}
    >
      <View style={styles.containerImg}>
        <Image
          source={{ uri: "https://loremflickr.com/640/480/city" }}
          style={{ width: 353, height: 350, borderRadius: 10 }}
        />
      </View>
    </ScrollView>
  );
}

export default ProductDetail;
