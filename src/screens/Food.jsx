import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useCategory } from '../context/Context';
import Theme from '../constants/theme';

const Food = () => {
  const { setSelectedCategory } = useCategory();

  const categories = [
    {
      id: 1,
      name: 'Pizza',
      image: {
        uri: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
      },
    },
    {
      id: 2,
      name: 'Burger',
      image: {
        uri: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
      },
    },
    {
      id: 3,
      name: 'Biryani',
      image: {
        uri: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      },
    },
    {
      id: 4,
      name: 'Momos',
      image: {
        uri: 'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg',
      },
    },
  ];
  const products = [
    {
      id: 1,
      name: 'Chicken Burger',
      restaurant: "McDonald's",
      image: {
        uri: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
      },
      rating: '4.6',
      time: '20-25 min',
      price: 249,
      oldPrice: 299,
      offer: '20% OFF',
    },

    {
      id: 2,
      name: 'Chicken Biryani',
      restaurant: 'Behrouz Biryani',
      image: {
        uri: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      },
      rating: '4.8',
      time: '25-30 min',
      price: 299,
      oldPrice: 349,
      offer: '15% OFF',
    },

    {
      id: 3,
      name: 'Farmhouse Pizza',
      restaurant: "Domino's",
      image: {
        uri: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
      },
      rating: '4.5',
      time: '30-35 min',
      price: 399,
      oldPrice: 499,
      offer: '20% OFF',
    },

    {
      id: 4,
      name: 'Chicken Momos',
      restaurant: 'Wow! Momo',
      image: {
        uri: 'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg',
      },
      rating: '4.4',
      time: '20-25 min',
      price: 179,
      oldPrice: 219,
      offer: '18% OFF',
    },
  ];
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Food</Text>

        <Pressable style={styles.cartButton}>
          <Text style={styles.cartIcon}>🛒</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            placeholder="Search for food or restaurants"
            placeholderTextColor={Theme.colors.textLight}
            style={styles.input}
          />

          <Text style={styles.filterIcon}>☷</Text>
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>What's on your mind?</Text>
        </View>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item, index }) => (
            <Pressable style={styles.categoryItem}>
              <View
                style={[
                  styles.categoryImageContainer,
                  index === 0 && styles.activeCategory,
                ]}
              >
                <Image source={item.image} style={styles.categoryImage} />
              </View>

              <Text style={styles.categoryName}>{item.name}</Text>
            </Pressable>
          )}
        />

        {/* Offer Banner */}
        <View style={styles.offerBanner}>
          <View>
            <Text style={styles.offerHeading}>FLAT 50% OFF</Text>

            <Text style={styles.offerText}>On your first food order</Text>

            <Pressable style={styles.orderButton}>
              <Text style={styles.orderButtonText}>ORDER NOW</Text>
            </Pressable>
          </View>

          <Text style={styles.offerEmoji}>🍔</Text>
        </View>

        {/* Popular Restaurants */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Restaurants</Text>

          <Text style={styles.seeAll}>See All</Text>
        </View>

        {/* Restaurant Cards */}
        <FlatList
          data={[
            {
              id: 1,
              name: "McDonald's",
              rating: '4.5',
              time: '20-25 min',
              image: require('../assets/images/restaurants/mcdonalds.png'),
            },
            {
              id: 2,
              name: 'KFC',
              rating: '4.4',
              time: '25-30 min',
              image: require('../assets/images/restaurants/kfc.png'),
            },
            {
              id: 3,
              name: 'Burger King',
              rating: '4.3',
              time: '18-22 min',
              image: require('../assets/images/restaurants/burgerking.png'),
            },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.restaurantList}
          renderItem={({ item }) => (
            <View style={styles.restaurantCard}>
              <Image source={item.image} style={styles.restaurantImage} />

              <Text style={styles.restaurantName}>{item.name}</Text>

              <View style={styles.restaurantDetails}>
                <Text style={styles.rating}>★ {item.rating}</Text>

                <Text style={styles.time}>• {item.time}</Text>
              </View>
            </View>
          )}
        />

        {/* Recommended */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended For You</Text>
        </View>

        {/* Food Products */}
        {products.map(item => (
          <View key={item.id} style={styles.productCard}>
            {/* Image */}
            <View style={styles.productImageContainer}>
              <Image source={item.image} style={styles.productImage} />

              <View style={styles.offerBadge}>
                <Text style={styles.offerBadgeText}>{item.offer}</Text>
              </View>
            </View>

            {/* Information */}
            <View style={styles.productInfo}>
              <Text style={styles.productName} numberOfLines={1}>
                {item.name}
              </Text>

              <Text style={styles.restaurantText}>{item.restaurant}</Text>

              <View style={styles.infoRow}>
                <Text style={styles.ratingSmall}>★ {item.rating}</Text>

                <Text style={styles.timeSmall}>{item.time}</Text>
              </View>

              <View style={styles.priceRow}>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>₹{item.price}</Text>

                  <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
                </View>

                <Pressable style={styles.addButton}>
                  <Text style={styles.addText}>ADD</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 13,
  },

  // Header

  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    fontSize: 30,
    color: Theme.colors.textPrimary,
    marginTop: -4,
  },

  headerTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  cartButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartIcon: {
    fontSize: 18,
  },

  // Search

  searchContainer: {
    height: 50,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  searchIcon: {
    fontSize: 25,
    color: Theme.colors.icon,
    marginRight: 8,
  },

  input: {
    flex: 1,
    height: 50,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  filterIcon: {
    fontSize: 22,
    color: Theme.colors.primary,
  },

  // Sections

  sectionHeader: {
    marginTop: 20,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  seeAll: {
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.primary,
  },

  // Categories

  categoryList: {
    paddingBottom: 5,
  },

  categoryItem: {
    width: 75,
    alignItems: 'center',
    marginRight: 12,
  },

  categoryImageContainer: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  activeCategory: {
    borderColor: Theme.colors.primary,
    backgroundColor: Theme.colors.primaryLight,
  },

  categoryImage: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },

  categoryName: {
    marginTop: 5,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textPrimary,
  },

  // Offer

  offerBanner: {
    height: 145,
    marginTop: 20,
    borderRadius: 18,
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  offerHeading: {
    fontFamily: Theme.fonts.extraBold,
    fontSize: 23,
    color: Theme.colors.white,
  },

  offerText: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.white,
  },

  orderButton: {
    marginTop: 12,
    backgroundColor: Theme.colors.white,
    borderRadius: 7,
    paddingHorizontal: 13,
    paddingVertical: 7,
    alignSelf: 'flex-start',
  },

  orderButtonText: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.primary,
  },

  offerEmoji: {
    fontSize: 75,
  },

  // Restaurants

  restaurantList: {
    paddingBottom: 5,
  },

  restaurantCard: {
    width: 145,
    backgroundColor: Theme.colors.white,
    borderRadius: 14,
    padding: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  restaurantImage: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  restaurantName: {
    marginTop: 7,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textPrimary,
  },

  restaurantDetails: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },

  rating: {
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.success,
  },

  time: {
    marginLeft: 5,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  // Products

  productCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  productImageContainer: {
    width: 125,
    height: 125,
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },

  offerBadge: {
    position: 'absolute',
    left: 6,
    bottom: 6,
    backgroundColor: Theme.colors.offer,
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 5,
  },

  offerBadgeText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },

  productInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },

  productName: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  restaurantText: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textSecondary,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  ratingSmall: {
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.success,
  },

  timeSmall: {
    marginLeft: 10,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  priceRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  oldPrice: {
    marginLeft: 7,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textLight,
    textDecorationLine: 'line-through',
  },

  addButton: {
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    backgroundColor: Theme.colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  addText: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.primary,
  },
});
