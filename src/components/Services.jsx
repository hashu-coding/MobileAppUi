import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import services from '../data/services';
import Theme from '../constants/theme';
import { useCategory } from '../context/Context';

const data = services;

const Services = () => {
  const { setSelectedCategory } = useCategory();

  return (
    <View>
      <FlatList
        data={data}
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => setSelectedCategory(item.category)}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 3,
                }}
              >
                <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: Theme.fontSize.sm,
                    color: Theme.colors.textPrimary,
                    fontFamily: Theme.fonts.bold,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
