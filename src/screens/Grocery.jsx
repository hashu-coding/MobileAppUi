import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Theme from '../constants/theme';
import GroceryProducts from '../data/groceryProducts';
import { useCategory } from '../context/Context';

const Grocery = () => {
  const { setSelectedCategory } = useCategory();

  const [selectedCategory, setCategory] = useState('All');

  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = [
    {
      id: '1',
      title: 'All',
      emoji: '🛒',
    },
    {
      id: '2',
      title: 'Fruits',
      emoji: '🍎',
    },
    {
      id: '3',
      title: 'Vegetables',
      emoji: '🥦',
    },
    {
      id: '4',
      title: 'Dairy',
      emoji: '🥛',
    },
    {
      id: '5',
      title: 'Beverages',
      emoji: '🥤',
    },
  ];

  // =====================================================
  // FILTER PRODUCTS
  // =====================================================

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return GroceryProducts;
    }

    return GroceryProducts.filter(
      item => item.category?.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }, [selectedCategory]);

  // =====================================================
  // CATEGORY PRESS
  // =====================================================

  const handleCategoryPress = title => {
    setCategory(title);
  };

  // =====================================================
  // RENDER PRODUCT
  // =====================================================

  const renderProduct = ({ item }) => {
    return (
      <View style={styles.productCard}>
        {/* PRODUCT IMAGE */}

        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.productImage} />

          {item.discount && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{item.discount}% OFF</Text>
            </View>
          )}
        </View>

        {/* PRODUCT INFO */}

        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.name}
          </Text>

          <Text style={styles.productQuantity}>{item.quantity}</Text>

          {/* PRICE */}

          <View style={styles.bottomRow}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>₹{item.price}</Text>

              {item.oldPrice && (
                <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
              )}
            </View>

            <Pressable
              onPress={() => console.log('Added:', item.name)}
              style={({ pressed }) => [
                styles.addButton,
                pressed && styles.pressed,
              ]}
            >
              <Icon name="add" size={17} color={Theme.colors.primary} />

              <Text style={styles.addText}>ADD</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* =================================================
          HEADER
      ================================================= */}

      <View style={styles.header}>
        {/* BACK */}

        <Pressable
          onPress={() => setSelectedCategory(null)}
          style={({ pressed }) => [
            styles.iconButton,
            pressed && styles.pressed,
          ]}
        >
          <Icon name="arrow-back" size={21} color={Theme.colors.textPrimary} />
        </Pressable>

        {/* TITLE */}

        <Text style={styles.headerTitle}>Grocery</Text>

        {/* RIGHT */}

        <View style={styles.headerRight}>
          <Pressable
            style={({ pressed }) => [
              styles.iconButton,
              pressed && styles.pressed,
            ]}
          >
            <Icon
              name="search-outline"
              size={21}
              color={Theme.colors.textPrimary}
            />
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.iconButton,
              pressed && styles.pressed,
            ]}
          >
            <Icon
              name="cart-outline"
              size={21}
              color={Theme.colors.textPrimary}
            />

            {/* CART BADGE */}

            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* =================================================
          SEARCH
      ================================================= */}

      <Pressable
        style={({ pressed }) => [styles.searchBox, pressed && styles.pressed]}
      >
        <Icon
          name="search-outline"
          size={21}
          color={Theme.colors.textSecondary}
        />

        <Text style={styles.placeholder}>
          Search groceries, fruits, vegetables...
        </Text>

        <View style={styles.filterButton}>
          <Icon name="options-outline" size={19} color={Theme.colors.primary} />
        </View>
      </Pressable>

      {/* =================================================
          CATEGORIES
      ================================================= */}

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => {
          const active = selectedCategory === item.title;

          return (
            <Pressable
              onPress={() => handleCategoryPress(item.title)}
              style={({ pressed }) => [
                styles.category,
                pressed && styles.categoryPressed,
              ]}
            >
              <View
                style={[
                  styles.categoryIcon,
                  active && styles.activeCategoryIcon,
                ]}
              >
                <Text style={styles.categoryEmoji}>{item.emoji}</Text>
              </View>

              <Text
                style={[
                  styles.categoryText,
                  active && styles.activeCategoryText,
                ]}
              >
                {item.title}
              </Text>

              {active && <View style={styles.activeLine} />}
            </Pressable>
          );
        }}
      />

      {/* =================================================
          OFFERS
      ================================================= */}

      <View style={styles.offerRow}>
        <View style={[styles.offerCard, styles.offerCardOne]}>
          <View style={styles.offerIcon}>
            <Icon
              name="bicycle-outline"
              size={21}
              color={Theme.colors.primary}
            />
          </View>

          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>FREE DELIVERY</Text>

            <Text style={styles.offerSubtitle}>On orders above ₹199</Text>
          </View>
        </View>

        <View style={[styles.offerCard, styles.offerCardTwo]}>
          <View style={styles.offerIcon}>
            <Icon name="pricetag-outline" size={21} color="#E78B00" />
          </View>

          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>10% OFF</Text>

            <Text style={styles.offerSubtitle}>On your first order</Text>
          </View>
        </View>
      </View>

      {/* =================================================
          SECTION HEADER
      ================================================= */}

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Best Selling</Text>

          <Text style={styles.sectionSubtitle}>Fresh picks for you</Text>
        </View>

        <Pressable hitSlop={8}>
          <Text style={styles.seeAll}>See all →</Text>
        </Pressable>
      </View>

      {/* =================================================
          PRODUCTS
      ================================================= */}

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>🛒</Text>

            <Text style={styles.emptyTitle}>No products found</Text>

            <Text style={styles.emptySubtitle}>Try another category</Text>
          </View>
        }
      />
    </View>
  );
};

export default Grocery;

const styles = StyleSheet.create({
  // =====================================================
  // MAIN
  // =====================================================

  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 13,
  },

  // =====================================================
  // HEADER
  // =====================================================

  header: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },

  iconButton: {
    width: 39,
    height: 39,
    borderRadius: 11,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartBadge: {
    position: 'absolute',
    right: -3,
    top: -4,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    paddingHorizontal: 3,
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartBadgeText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 8,
  },

  // =====================================================
  // SEARCH
  // =====================================================

  searchBox: {
    minHeight: 52,
    borderRadius: 13,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  placeholder: {
    flex: 1,
    marginLeft: 9,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textLight,
  },

  filterButton: {
    width: 34,
    height: 34,
    borderLeftWidth: 1,
    borderLeftColor: Theme.colors.divider,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  // =====================================================
  // CATEGORIES
  // =====================================================

  categoryList: {
    paddingTop: 16,
    paddingBottom: 15,
  },

  category: {
    width: 70,
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },

  categoryPressed: {
    opacity: 0.7,
  },

  categoryIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeCategoryIcon: {
    backgroundColor: Theme.colors.primaryLight,
    borderColor: Theme.colors.primary,
  },

  categoryEmoji: {
    fontSize: 25,
  },

  categoryText: {
    marginTop: 6,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  activeCategoryText: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.semiBold,
  },

  activeLine: {
    marginTop: 5,
    width: 18,
    height: 2,
    borderRadius: 2,
    backgroundColor: Theme.colors.primary,
  },

  // =====================================================
  // OFFERS
  // =====================================================

  offerRow: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: 18,
  },

  offerCard: {
    flex: 1,
    minHeight: 75,
    borderRadius: 13,
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },

  offerCardOne: {
    backgroundColor: '#EAFBF0',
  },

  offerCardTwo: {
    backgroundColor: '#FFF5E6',
  },

  offerIcon: {
    width: 37,
    height: 37,
    borderRadius: 19,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  offerContent: {
    flex: 1,
    marginLeft: 8,
  },

  offerTitle: {
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
    color: Theme.colors.textPrimary,
  },

  offerSubtitle: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: 9,
    color: Theme.colors.textSecondary,
  },

  // =====================================================
  // SECTION
  // =====================================================

  sectionHeader: {
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  sectionSubtitle: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: 9,
    color: Theme.colors.textSecondary,
  },

  seeAll: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.primary,
  },

  // =====================================================
  // PRODUCTS
  // =====================================================

  productList: {
    paddingBottom: 30,
  },

  productCard: {
    minHeight: 112,
    backgroundColor: Theme.colors.white,
    borderRadius: 15,
    padding: 9,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  imageContainer: {
    width: 92,
    height: 92,
    borderRadius: 12,
    backgroundColor: Theme.colors.background,
    overflow: 'hidden',
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  discountBadge: {
    position: 'absolute',
    top: 5,
    left: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: Theme.colors.primary,
  },

  discountText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 7,
  },

  productInfo: {
    flex: 1,
    marginLeft: 11,
    justifyContent: 'center',
  },

  productName: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.md,
    lineHeight: 19,
    color: Theme.colors.textPrimary,
  },

  productQuantity: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  bottomRow: {
    marginTop: 7,
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
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textPrimary,
  },

  oldPrice: {
    marginLeft: 6,
    fontFamily: Theme.fonts.regular,
    fontSize: 10,
    color: Theme.colors.textLight,
    textDecorationLine: 'line-through',
  },

  addButton: {
    minWidth: 70,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    backgroundColor: Theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  addText: {
    marginLeft: 3,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
    color: Theme.colors.primary,
  },

  // =====================================================
  // EMPTY
  // =====================================================

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },

  emptyEmoji: {
    fontSize: 45,
  },

  emptyTitle: {
    marginTop: 12,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  emptySubtitle: {
    marginTop: 4,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textSecondary,
  },

  // =====================================================
  // PRESS
  // =====================================================

  pressed: {
    opacity: 0.7,
  },
});
