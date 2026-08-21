import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import FoodCategories from '../data/foodCategories';
import Theme from '../constants/theme';

const FoodCard = () => {
  return (
    <FlatList
      data={FoodCategories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View style={styles.fdCard}>
            <View style={{ height: '60%' }}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={item.image}
              />
            </View>
            <View
              style={{
                height: '40%',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: Theme.fontSize.lg,
                  color: Theme.colors.textPrimary,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: Theme.fontSize.md,
                  color: Theme.colors.textSecondary,
                }}
              >
                {item.restaurants}
              </Text>
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  fdCard: {
    width: 125,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Theme.colors.border,
    marginHorizontal: 4,
  },
});
