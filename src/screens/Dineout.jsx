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

const Dineout = () => {
  const { setSelectedCategory } = useCategory();

  const categories = [
    {
      id: 1,
      title: 'All',
      emoji: '🍽️',
    },
    {
      id: 2,
      title: 'Fine Dining',
      emoji: '🥂',
    },
    {
      id: 3,
      title: 'Cafe',
      emoji: '☕',
    },
    {
      id: 4,
      title: 'Family',
      emoji: '👨‍👩‍👧‍👦',
    },
    {
      id: 5,
      title: 'Buffet',
      emoji: '🍱',
    },
    {
      id: 6,
      title: 'Rooftop',
      emoji: '🌃',
    },
  ];

  const restaurants = [
    {
      id: 1,
      name: 'The Terrace Cafe',
      cuisine: 'North Indian • Continental',
      location: 'MG Road',
      rating: '4.6',
      reviews: '1.2k',
      distance: '2.1 km',
      offer: '50% OFF',
      price: '₹900 for two',
      image: {
        uri: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      },
    },
    {
      id: 2,
      name: 'Urban Tadka',
      cuisine: 'North Indian • Mughlai',
      location: 'Sector 29',
      rating: '4.5',
      reviews: '856',
      distance: '3.4 km',
      offer: '40% OFF',
      price: '₹800 for two',
      image: {
        uri: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
      },
    },
    {
      id: 3,
      name: 'The Rooftop Kitchen',
      cuisine: 'Italian • Asian',
      location: 'Golf Course Road',
      rating: '4.7',
      reviews: '642',
      distance: '4.2 km',
      offer: '30% OFF',
      price: '₹1200 for two',
      image: {
        uri: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
      },
    },
    {
      id: 4,
      name: 'Cafe Coffee House',
      cuisine: 'Cafe • Fast Food',
      location: 'City Centre',
      rating: '4.3',
      reviews: '520',
      distance: '1.8 km',
      offer: '20% OFF',
      price: '₹600 for two',
      image: {
        uri: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      },
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

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Dineout</Text>
          <Text style={styles.headerSubtitle}>
            Discover restaurants near you
          </Text>
        </View>

        <Pressable style={styles.bookingsButton}>
          <Text style={styles.bookingIcon}>🎫</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.input}
            placeholder="Search restaurants, cuisines..."
            placeholderTextColor={Theme.colors.textLight}
          />

          <Text style={styles.filterIcon}>☷</Text>
        </View>

        {/* Main Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerSmall}>DINE & SAVE</Text>

            <Text style={styles.bannerTitle}>Up to 50% OFF</Text>

            <Text style={styles.bannerSubtitle}>On your restaurant bills</Text>

            <Pressable style={styles.exploreButton}>
              <Text style={styles.exploreText}>EXPLORE NOW</Text>
            </Pressable>
          </View>

          <Text style={styles.bannerEmoji}>🍽️</Text>
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore by Category</Text>

          <Text style={styles.seeAll}>See All</Text>
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
                  styles.categoryIcon,
                  index === 0 && styles.activeCategory,
                ]}
              >
                <Text style={styles.categoryEmoji}>{item.emoji}</Text>
              </View>

              <Text style={styles.categoryTitle}>{item.title}</Text>
            </Pressable>
          )}
        />

        {/* Offers */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Dining Offers</Text>
        </View>

        <View style={styles.offerRow}>
          <View style={styles.offerCard}>
            <Text style={styles.offerIcon}>%</Text>

            <View>
              <Text style={styles.offerTitle}>FLAT 50% OFF</Text>

              <Text style={styles.offerSubtitle}>On selected restaurants</Text>
            </View>
          </View>

          <View style={[styles.offerCard, { backgroundColor: '#EAFBF0' }]}>
            <Text style={[styles.offerIcon, { color: Theme.colors.success }]}>
              ₹
            </Text>

            <View>
              <Text style={styles.offerTitle}>EXTRA ₹200 OFF</Text>

              <Text style={styles.offerSubtitle}>Pay with FIMA</Text>
            </View>
          </View>
        </View>

        {/* Restaurants */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Restaurants</Text>

          <Text style={styles.seeAll}>See All</Text>
        </View>

        {restaurants.map(item => (
          <Pressable key={item.id} style={styles.restaurantCard}>
            {/* Image */}
            <View style={styles.restaurantImageContainer}>
              <Image source={item.image} style={styles.restaurantImage} />

              <View style={styles.offerBadge}>
                <Text style={styles.offerBadgeText}>{item.offer}</Text>
              </View>

              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>★ {item.rating}</Text>
              </View>
            </View>

            {/* Info */}
            <View style={styles.restaurantInfo}>
              <View style={styles.restaurantTopRow}>
                <Text style={styles.restaurantName} numberOfLines={1}>
                  {item.name}
                </Text>

                <Text style={styles.heart}>♡</Text>
              </View>

              <Text style={styles.cuisine} numberOfLines={1}>
                {item.cuisine}
              </Text>

              <View style={styles.locationRow}>
                <Text style={styles.location}>📍 {item.location}</Text>

                <Text style={styles.distance}>{item.distance}</Text>
              </View>

              <View style={styles.bottomRow}>
                <Text style={styles.price}>{item.price}</Text>

                <Pressable style={styles.bookButton}>
                  <Text style={styles.bookText}>BOOK TABLE</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        ))}

        <View style={{ height: 35 }} />
      </ScrollView>
    </View>
  );
};

export default Dineout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 13,
  },

  // Header

  header: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
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

  headerCenter: {
    flex: 1,
    marginLeft: 12,
  },

  headerTitle: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  headerSubtitle: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  bookingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookingIcon: {
    fontSize: 18,
  },

  // Search

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

  filterIcon: {
    fontSize: 22,
    color: Theme.colors.primary,
  },

  // Banner

  banner: {
    height: 155,
    marginTop: 15,
    borderRadius: 18,
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },

  bannerContent: {
    flex: 1,
  },

  bannerSmall: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.white,
    letterSpacing: 1,
  },

  bannerTitle: {
    marginTop: 4,
    fontFamily: Theme.fonts.extraBold,
    fontSize: 24,
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
  },

  exploreButton: {
    marginTop: 10,
    backgroundColor: Theme.colors.white,
    alignSelf: 'flex-start',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 7,
  },

  exploreText: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
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
    paddingBottom: 3,
  },

  categoryItem: {
    width: 78,
    alignItems: 'center',
    marginRight: 12,
  },

  categoryIcon: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeCategory: {
    borderColor: Theme.colors.primary,
    backgroundColor: Theme.colors.primaryLight,
  },

  categoryEmoji: {
    fontSize: 29,
  },

  categoryTitle: {
    marginTop: 6,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
  },

  // Offers

  offerRow: {
    flexDirection: 'row',
    gap: 10,
  },

  offerCard: {
    flex: 1,
    backgroundColor: '#FFF1E6',
    borderRadius: 14,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },

  offerIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Theme.colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: Theme.fonts.bold,
    fontSize: 18,
    color: Theme.colors.primary,
    marginRight: 8,
  },

  offerTitle: {
    fontFamily: Theme.fonts.bold,
    fontSize: 11,
    color: Theme.colors.textPrimary,
  },

  offerSubtitle: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: 9,
    color: Theme.colors.textSecondary,
  },

  // Restaurant

  restaurantCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: 17,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  restaurantImageContainer: {
    height: 170,
    position: 'relative',
  },

  restaurantImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  offerBadge: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    backgroundColor: Theme.colors.offer,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  offerBadgeText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },

  ratingBadge: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: Theme.colors.white,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },

  ratingText: {
    color: Theme.colors.success,
    fontFamily: Theme.fonts.bold,
    fontSize: 11,
  },

  restaurantInfo: {
    padding: 12,
  },

  restaurantTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  restaurantName: {
    flex: 1,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  heart: {
    fontSize: 25,
    color: Theme.colors.textSecondary,
  },

  cuisine: {
    marginTop: 4,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textSecondary,
  },

  locationRow: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  location: {
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  distance: {
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  bottomRow: {
    marginTop: 11,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.divider,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  price: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  bookButton: {
    backgroundColor: Theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  bookText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },
});
