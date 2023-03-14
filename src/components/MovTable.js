import React from "react";
import { View } from "react-native";

import { styles } from "../../styles";
import RowTable from "./RowTable";

const MovTable = ({ movements }) => {
  return (
    <View style={styles.table}>
      {movements &&
        movements.map(({ product, createdAt, points, is_redemption }) => (
          <RowTable
            date={createdAt}
            isRedemption={is_redemption}
            product={product}
            points={points}
          />
        ))}
    </View>
  );
};

export default MovTable;
