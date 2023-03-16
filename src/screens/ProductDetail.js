import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import mainContext from '../../context/mainContext';
import { CardDetail } from '../components';

function ProductDetail() {
  const { styles } = useContext(mainContext);
  const route = useRoute();
  const { product, points, isRedemption, date, image } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        width: '100%',
      }}>
      <View style={styles.containerImg}>
        {loading && (
          <View
            style={{
              width: '100%',
              height: 350,
              position: 'absolute',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color="#334FFA" size="large" />
          </View>
        )}
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: 350, borderRadius: 10 }}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
      <CardDetail
        date={date}
        isRedemption={isRedemption}
        points={points}
        product={product}
      />
      <TouchableOpacity
        style={styles.button}
        testID="touchableGoBackTolist"
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.monthBlueBox}>Aceptar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ProductDetail;
