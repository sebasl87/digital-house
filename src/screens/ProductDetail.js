import React, { useContext } from "react";
import { View, ScrollView, Image } from "react-native";
import mainContext from "../../context/mainContext";
import { CardDetail } from "../components";

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
          style={{ width: "100%", height: 350, borderRadius: 10 }}
        />
      </View>
      <CardDetail />
    </ScrollView>
  );
}

export default ProductDetail;
