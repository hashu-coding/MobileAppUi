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

const Instamart = () => {
  const { setSelectedCategory } = useCategory();

  const categories = [
    {
      id: 1,
      title: 'Fruits',
      image: {
        uri: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
      },
    },
    {
      id: 2,
      title: 'Vegetables',
      image: {
        uri: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg',
      },
    },
    {
      id: 3,
      title: 'Dairy',
      image: {
        uri: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg',
      },
    },
    {
      id: 4,
      title: 'Snacks',
      image: {
        uri: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg',
      },
    },
    {
      id: 5,
      title: 'Drinks',
      image: {
        uri: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
      },
    },
    {
      id: 6,
      title: 'Bakery',
      image: {
        uri: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg',
      },
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Fresh Red Apples',
      quantity: '1 kg',
      price: 129,
      oldPrice: 160,
      discount: '19% OFF',
      image: {
        uri: 'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg',
      },
    },
    {
      id: 2,
      name: 'Fresh Bananas',
      quantity: '1 kg',
      price: 49,
      oldPrice: 60,
      discount: '18% OFF',
      image: {
        uri: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg',
      },
    },
    {
      id: 3,
      name: 'Amul Fresh Milk',
      quantity: '1 L',
      price: 61,
      oldPrice: 68,
      discount: '10% OFF',
      image: {
        uri: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
      },
    },
    {
      id: 4,
      name: 'Potato',
      quantity: '1 kg',
      price: 39,
      oldPrice: 50,
      discount: '22% OFF',
      image: {
        uri: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg',
      },
    },
    {
      id: 5,
      name: 'Lays Classic Chips',
      quantity: '52 g',
      price: 20,
      oldPrice: 25,
      discount: '20% OFF',
      image: {
        uri: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg',
      },
    },
    {
      id: 6,
      name: 'Coca Cola',
      quantity: '750 ml',
      price: 40,
      oldPrice: 45,
      discount: '11% OFF',
      image: {
        uri: 'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg',
      },
    },
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Instamart</Text>
          <Text style={styles.deliveryText}>⚡ 10 min delivery</Text>
        </View>

        <Pressable style={styles.cartButton}>
          <Text style={styles.cartIcon}>🛒</Text>

          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>2</Text>
          </View>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.input}
            placeholder="Search groceries & essentials"
            placeholderTextColor={Theme.colors.textLight}
          />

          <Text style={styles.micIcon}>🎙</Text>
        </View>

        {/* QUICK DELIVERY BANNER */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerSmall}>INSTANT DELIVERY</Text>

            <Text style={styles.bannerTitle}>Groceries at your door</Text>

            <Text style={styles.bannerSubtitle}>
              Delivered in just 10 minutes
            </Text>

            <Pressable style={styles.shopButton}>
              <Text style={styles.shopButtonText}>SHOP NOW</Text>
            </Pressable>
          </View>

          <Text style={styles.bannerEmoji}>🛍️</Text>
        </View>

        {/* CATEGORIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>

          <Text style={styles.seeAll}>See All</Text>
        </View>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <Pressable style={styles.categoryItem}>
              <View style={styles.categoryImageContainer}>
                <Image source={item.image} style={styles.categoryImage} />
              </View>

              <Text style={styles.categoryTitle}>{item.title}</Text>
            </Pressable>
          )}
        />

        {/* OFFER */}
        <View style={styles.offerRow}>
          <View style={styles.offerCard}>
            <Text style={styles.offerTitle}>₹100 OFF</Text>

            <Text style={styles.offerSubtitle}>On your first order</Text>

            <Text style={styles.offerCode}>Use: FIMA100</Text>
          </View>

          <View
            style={[
              styles.offerCard,
              {
                backgroundColor: '#EAFBF0',
              },
            ]}
          >
            <Text style={styles.offerTitle}>FREE DELIVERY</Text>

            <Text style={styles.offerSubtitle}>On orders above ₹199</Text>

            <Text style={styles.offerCode}>No coupon needed</Text>
          </View>
        </View>

        {/* BEST SELLING */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>

          <Text style={styles.seeAll}>See All</Text>
        </View>

        {/* PRODUCTS */}
        <View>
          {products.map(item => (
            <View key={item.id} style={styles.productCard}>
              {/* IMAGE */}
              <View style={styles.productImageContainer}>
                <Image source={item.image} style={styles.productImage} />

                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
              </View>

              {/* INFO */}
              <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={1}>
                  {item.name}
                </Text>

                <Text style={styles.quantity}>{item.quantity}</Text>

                <View style={styles.priceRow}>
                  <View style={styles.prices}>
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
        </View>

        <View style={{ height: 35 }} />
      </ScrollView>
    </View>
  );
};

export default Instamart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 13,
  },

  // HEADER

  header: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backText: {
    fontSize: 30,
    color: Theme.colors.textPrimary,
    marginTop: -4,
  },

  headerTitleContainer: {
    flex: 1,
    marginLeft: 12,
  },

  headerTitle: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  deliveryText: {
    marginTop: 1,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.success,
  },

  cartButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  cartIcon: {
    fontSize: 19,
  },

  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartBadgeText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },

  // SEARCH

  searchContainer: {
    height: 52,
    borderRadius: 14,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  searchIcon: {
    fontSize: 25,
    color: Theme.colors.icon,
    marginRight: 8,
  },

  input: {
    flex: 1,
    height: 52,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  micIcon: {
    fontSize: 18,
  },

  // BANNER

  banner: {
    height: 155,
    marginTop: 15,
    borderRadius: 18,
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  bannerContent: {
    flex: 1,
  },

  bannerSmall: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xs,
    color: '#FFF3E8',
    letterSpacing: 1,
  },

  bannerTitle: {
    marginTop: 4,
    fontFamily: Theme.fonts.extraBold,
    fontSize: 21,
    color: Theme.colors.white,
  },

  bannerSubtitle: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.white,
  },

  bannerEmoji: {
    fontSize: 70,
    marginRight: 4,
  },

  shopButton: {
    marginTop: 10,
    backgroundColor: Theme.colors.white,
    alignSelf: 'flex-start',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 7,
  },

  shopButtonText: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },

  // SECTION

  sectionHeader: {
    marginTop: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  // CATEGORY

  categoryList: {
    paddingBottom: 4,
  },

  categoryItem: {
    width: 78,
    alignItems: 'center',
    marginRight: 12,
  },

  categoryImageContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoryImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    resizeMode: 'cover',
  },

  categoryTitle: {
    marginTop: 6,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textPrimary,
  },

  // OFFERS

  offerRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },

  offerCard: {
    flex: 1,
    backgroundColor: '#FFF1E6',
    borderRadius: 14,
    padding: 13,
  },

  offerTitle: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textPrimary,
  },

  offerSubtitle: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: 10,
    color: Theme.colors.textSecondary,
  },

  offerCode: {
    marginTop: 7,
    fontFamily: Theme.fonts.medium,
    fontSize: 9,
    color: Theme.colors.primary,
  },

  // PRODUCT

  productCard: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.white,
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  productImageContainer: {
    width: 105,
    height: 105,
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
  },

  discountBadge: {
    position: 'absolute',
    left: 5,
    bottom: 5,
    backgroundColor: Theme.colors.offer,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 5,
  },

  discountText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 9,
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

  quantity: {
    marginTop: 4,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textSecondary,
  },

  priceRow: {
    marginTop: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  prices: {
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
    borderRadius: 8,
    paddingHorizontal: 17,
    paddingVertical: 7,
    backgroundColor: Theme.colors.white,
  },

  addText: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.primary,
  },
});
