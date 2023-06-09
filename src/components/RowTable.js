import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { styles } from '../styles';
import { formatDate } from '../utils';

const RowTable = ({ product, points, isRedemption, date, image }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity
      testID="touchableProduct"
      onPress={() => {
        navigation.navigate('Product', {
          product,
          points,
          isRedemption,
          date,
          image,
        });
      }}>
      <View style={styles.rowTable}>
        {loading && (
          <View
            style={{
              width: 55,
              height: 55,
              position: 'absolute',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color="#334FFA" />
          </View>
        )}
        <Image
          source={{ uri: image }}
          style={{ width: 55, height: 55, borderRadius: 10 }}
          onLoadEnd={() => setLoading(false)}
        />
        <View style={{ marginLeft: 12, width: 200 }}>
          <Text
            style={[styles.titleSection, { color: '#000', marginVertical: 5 }]}>
            {product}
          </Text>
          <Text style={[styles.dateText, { marginTop: 2 }]}>
            {formatDate(date)}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {isRedemption ? (
            <Text style={[styles.monthBlueBox, { color: '#FF0000' }]}>- </Text>
          ) : (
            <Text style={[styles.monthBlueBox, { color: '#00B833' }]}>+ </Text>
          )}
          <Text style={[styles.monthBlueBox, { color: '#000' }]}>{points}</Text>
          <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text
              style={[styles.monthBlueBox, { color: '#000', marginLeft: 8 }]}>
              &gt;
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RowTable;
