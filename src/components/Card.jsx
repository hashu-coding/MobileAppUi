import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Theme from '../constants/theme';
import restuarants from '../data/restuarants';

const cardData = restuarants;

const Card = () => {
  return (
    <FlatList
      data={cardData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View style={styles.card}>
            <View style={[styles.containers, { height: '55%' }]}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={item.image}
              />
            </View>
            <View style={[styles.containers, { padding: 5, height: '45%' }]}>
              <Text style={styles.txtHd1}>{item.name}</Text>
              <Text style={styles.txtHd2}>{item.deliveryTime}</Text>
              <Text style={styles.txtHd3}>{item.price}</Text>
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 125,
    height: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    marginHorizontal: 4,
  },
  containers: {
    justifyContent: 'space-between',
    borderRadius: 8,
    overflow: 'hidden',
  },
  txtHd1: {
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
    fontWeight: 600,
  },
  txtHd2: {
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textSecondary,
    fontWeight: 600,
  },
  txtHd3: {
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textSecondary,
    fontWeight: 600,
  },
});
