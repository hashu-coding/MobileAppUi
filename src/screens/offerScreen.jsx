import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../constants/theme';

const OfferScreen = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    {
      id: 1,
      title: 'All',
      icon: 'apps-outline',
    },
    {
      id: 2,
      title: 'Food',
      icon: 'restaurant-outline',
    },
    {
      id: 3,
      title: 'Grocery',
      icon: 'cart-outline',
    },
    {
      id: 4,
      title: 'Dineout',
      icon: 'wine-outline',
    },
    {
      id: 5,
      title: 'Pharmacy',
      icon: 'medkit-outline',
    },
  ];

  const offers = [
    {
      id: 1,
      category: 'Food',
      title: 'FLAT ₹150 OFF',
      subtitle: 'On your first food order',
      description: 'Get flat ₹150 off on orders above ₹399',
      code: 'FIMA150',
      color: '#FFF0E6',
      icon: '🍔',
      condition: 'Min. order ₹399',
    },

    {
      id: 2,
      category: 'Food',
      title: '40% OFF',
      subtitle: 'On selected restaurants',
      description: 'Get up to 40% off on your favourite meals',
      code: 'FOOD40',
      color: '#FFECEF',
      icon: '🍕',
      condition: 'Up to ₹200',
    },

    {
      id: 3,
      category: 'Grocery',
      title: '₹100 OFF',
      subtitle: 'On grocery orders',
      description: 'Save ₹100 on your grocery shopping',
      code: 'GROCERY100',
      color: '#EAFBF0',
      icon: '🛒',
      condition: 'Min. order ₹499',
    },

    {
      id: 4,
      category: 'Grocery',
      title: 'FREE DELIVERY',
      subtitle: 'On orders above ₹199',
      description: 'Enjoy free delivery on your grocery orders',
      code: 'FREEDEL',
      color: '#E8F5FF',
      icon: '🚚',
      condition: 'Min. order ₹199',
    },

    {
      id: 5,
      category: 'Dineout',
      title: 'UP TO 50% OFF',
      subtitle: 'Dine at selected restaurants',
      description: 'Enjoy amazing discounts on your dining bills',
      code: 'DINE50',
      color: '#F4EAFE',
      icon: '🍽️',
      condition: 'Selected restaurants',
    },

    {
      id: 6,
      category: 'Pharmacy',
      title: '₹75 OFF',
      subtitle: 'On healthcare products',
      description: 'Get ₹75 off on your pharmacy order',
      code: 'HEALTH75',
      color: '#E8FBF5',
      icon: '💊',
      condition: 'Min. order ₹299',
    },
  ];

  const filteredOffers =
    activeCategory === 'All'
      ? offers
      : offers.filter(item => item.category === activeCategory);

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Offers & Coupons</Text>

          <Text style={styles.headerSubtitle}>Save more on every order</Text>
        </View>

        <View style={styles.offerIconContainer}>
          <Text style={styles.offerEmoji}>%</Text>
        </View>
      </View>

      {/* SEARCH */}

      <View style={styles.searchContainer}>
        <Icon
          name="search-outline"
          size={22}
          color={Theme.colors.textSecondary}
        />

        <TextInput
          style={styles.input}
          placeholder="Search offers & coupons"
          placeholderTextColor={Theme.colors.textLight}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TOP OFFER */}

        <View style={styles.topBanner}>
          <View style={styles.topBannerContent}>
            <Text style={styles.bannerSmall}>SPECIAL OFFER</Text>

            <Text style={styles.bannerTitle}>Get ₹200 OFF</Text>

            <Text style={styles.bannerSubtitle}>On your next order</Text>

            <View style={styles.bannerCode}>
              <Text style={styles.bannerCodeText}>FIMA200</Text>

              <Icon name="copy-outline" size={16} color={Theme.colors.white} />
            </View>
          </View>

          <Text style={styles.bannerEmoji}>🎁</Text>
        </View>

        {/* CATEGORY */}

        <Text style={styles.sectionTitle}>Browse Offers</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => {
            const active = activeCategory === item.title;

            return (
              <Pressable
                onPress={() => setActiveCategory(item.title)}
                style={[styles.category, active && styles.activeCategory]}
              >
                <Icon
                  name={item.icon}
                  size={20}
                  color={active ? Theme.colors.white : Theme.colors.primary}
                />

                <Text
                  style={[
                    styles.categoryText,
                    active && styles.activeCategoryText,
                  ]}
                >
                  {item.title}
                </Text>
              </Pressable>
            );
          }}
        />

        {/* OFFER COUNT */}

        <View style={styles.resultHeader}>
          <Text style={styles.resultTitle}>Available Offers</Text>

          <Text style={styles.resultCount}>{filteredOffers.length} offers</Text>
        </View>

        {/* OFFER CARDS */}

        {filteredOffers.map(item => (
          <View key={item.id} style={styles.offerCard}>
            {/* LEFT SIDE */}

            <View
              style={[
                styles.offerVisual,
                {
                  backgroundColor: item.color,
                },
              ]}
            >
              <Text style={styles.offerCardEmoji}>{item.icon}</Text>

              <View style={styles.discountCircle}>
                <Text style={styles.discountText}>%</Text>
              </View>
            </View>

            {/* RIGHT SIDE */}

            <View style={styles.offerInfo}>
              <View style={styles.offerTitleRow}>
                <Text style={styles.offerTitle}>{item.title}</Text>

                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryBadgeText}>{item.category}</Text>
                </View>
              </View>

              <Text style={styles.offerSubtitle}>{item.subtitle}</Text>

              <Text style={styles.description}>{item.description}</Text>

              <Text style={styles.condition}>• {item.condition}</Text>

              {/* COUPON */}

              <View style={styles.couponRow}>
                <View style={styles.couponBox}>
                  <Text style={styles.couponText}>{item.code}</Text>

                  <Icon
                    name="copy-outline"
                    size={16}
                    color={Theme.colors.primary}
                  />
                </View>

                <Pressable style={styles.applyButton}>
                  <Text style={styles.applyText}>APPLY</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}

        {/* EMPTY */}

        {filteredOffers.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🎟️</Text>

            <Text style={styles.emptyTitle}>No offers available</Text>

            <Text style={styles.emptyText}>Try another category</Text>
          </View>
        )}

        {/* FOOTER */}

        <View style={styles.footer}>
          <Icon
            name="shield-checkmark-outline"
            size={22}
            color={Theme.colors.success}
          />

          <View style={styles.footerInfo}>
            <Text style={styles.footerTitle}>Genuine Offers</Text>

            <Text style={styles.footerText}>
              All offers are verified by FIMA
            </Text>
          </View>
        </View>

        <View style={{ height: 35 }} />
      </ScrollView>
    </View>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 13,
  },

  // HEADER

  header: {
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xxl,
    color: Theme.colors.textPrimary,
  },

  headerSubtitle: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  offerIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  offerEmoji: {
    fontSize: 25,
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
  },

  // SEARCH

  searchContainer: {
    height: 52,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  input: {
    flex: 1,
    height: 52,
    marginLeft: 8,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  // BANNER

  topBanner: {
    height: 150,
    marginTop: 15,
    borderRadius: 18,
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  topBannerContent: {
    flex: 1,
  },

  bannerSmall: {
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
    color: Theme.colors.white,
    letterSpacing: 1,
  },

  bannerTitle: {
    marginTop: 4,
    fontFamily: Theme.fonts.extraBold,
    fontSize: 25,
    color: Theme.colors.white,
  },

  bannerSubtitle: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.white,
  },

  bannerEmoji: {
    fontSize: 65,
  },

  bannerCode: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  bannerCodeText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },

  // SECTION

  sectionTitle: {
    marginTop: 21,
    marginBottom: 12,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  // CATEGORIES

  categoryList: {
    paddingBottom: 3,
  },

  category: {
    height: 42,
    paddingHorizontal: 14,
    borderRadius: 21,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    marginRight: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeCategory: {
    backgroundColor: Theme.colors.primary,
    borderColor: Theme.colors.primary,
  },

  categoryText: {
    marginLeft: 6,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  activeCategoryText: {
    color: Theme.colors.white,
  },

  // RESULT HEADER

  resultHeader: {
    marginTop: 21,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  resultTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  resultCount: {
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  // OFFER CARD

  offerCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: 16,
    marginBottom: 13,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  offerVisual: {
    width: 90,
    height: 150,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  offerCardEmoji: {
    fontSize: 45,
  },

  discountCircle: {
    position: 'absolute',
    bottom: 10,
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  discountText: {
    fontFamily: Theme.fonts.extraBold,
    color: Theme.colors.primary,
    fontSize: 16,
  },

  offerInfo: {
    flex: 1,
    marginLeft: 11,
    paddingVertical: 3,
  },

  offerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  offerTitle: {
    flex: 1,
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  categoryBadge: {
    backgroundColor: Theme.colors.primaryLight,
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  categoryBadgeText: {
    fontFamily: Theme.fonts.medium,
    fontSize: 8,
    color: Theme.colors.primary,
  },

  offerSubtitle: {
    marginTop: 4,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  description: {
    marginTop: 5,
    fontFamily: Theme.fonts.regular,
    fontSize: 10,
    lineHeight: 15,
    color: Theme.colors.textSecondary,
  },

  condition: {
    marginTop: 5,
    fontFamily: Theme.fonts.medium,
    fontSize: 9,
    color: Theme.colors.textSecondary,
  },

  // COUPON

  couponRow: {
    marginTop: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },

  couponBox: {
    flex: 1,
    height: 34,
    borderRadius: 7,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Theme.colors.primary,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  couponText: {
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
    color: Theme.colors.primary,
  },

  applyButton: {
    height: 34,
    marginLeft: 7,
    paddingHorizontal: 13,
    borderRadius: 7,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  applyText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 9,
  },

  // EMPTY

  empty: {
    alignItems: 'center',
    marginTop: 80,
  },

  emptyEmoji: {
    fontSize: 50,
  },

  emptyTitle: {
    marginTop: 12,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
  },

  emptyText: {
    marginTop: 5,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textSecondary,
  },

  // FOOTER

  footer: {
    marginTop: 10,
    padding: 14,
    borderRadius: 13,
    backgroundColor: '#EAFBF0',
    flexDirection: 'row',
    alignItems: 'center',
  },

  footerInfo: {
    marginLeft: 10,
  },

  footerTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  footerText: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: 9,
    color: Theme.colors.textSecondary,
  },
});
