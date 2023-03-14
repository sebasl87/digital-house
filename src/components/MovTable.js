import React from "react";
import { View } from "react-native";

import { styles } from "../../styles";
import RowTable from "./RowTable";

const MovTable = ({ movements }) => {
  return (
    <View style={styles.table}>
      {movements &&
        movements.map(
          ({ product, createdAt, points, is_redemption, image, id }) => (
            <RowTable
              key={id}
              date={createdAt}
              image={image}
              isRedemption={is_redemption}
              points={points}
              product={product}
            />
          )
        )}
    </View>
  );
};

export default MovTable;
