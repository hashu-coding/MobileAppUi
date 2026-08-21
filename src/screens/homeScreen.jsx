import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import IconSec from 'react-native-vector-icons/FontAwesome';

import Theme from '../constants/theme';
import Services from '../components/Services';
import Card from '../components/Card';
import FoodCard from '../components/FoodCard';
import {useCategory} from '../context/Context';
import CategoryContent from '../context/CategoryContent';

const HomeScreen = ({navigation}) => {
  const {selectedCategory} = useCategory();

  // Category selected hai to category screen dikhao
  if (selectedCategory) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <CategoryContent category={selectedCategory} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={true}>

        {/* ================= HEADER ================= */}

        <View style={styles.header}>

          {/* Location */}

          <View style={styles.locationIconContainer}>
            <Icon
              name="location"
              size={25}
              color={Theme.colors.buttonPrimary}
            />
          </View>

          <View style={styles.locationInfo}>
            <Text style={styles.deliveredText}>
              Delivered to
            </Text>

            <Text
              style={styles.address}
              numberOfLines={1}>
              Home • 123 MG Road, Delhi
            </Text>
          </View>

          {/* Notification */}

          <Pressable
            style={({pressed}) => [
              styles.notificationButton,
              pressed && styles.pressed,
            ]}
            onPress={() => console.log('Notifications')}>

            <Icon
              name="notifications-outline"
              size={21}
              color={Theme.colors.icon}
            />

            {/* Notification dot */}

            <View style={styles.notificationDot} />

          </Pressable>

        </View>

        {/* ================= SEARCH ================= */}

        <Pressable
          style={({pressed}) => [
            styles.searchContainer,
            pressed && styles.pressed,
          ]}
          onPress={() => navigation.navigate('searchScreen')}>

          <Icon
            name="search-outline"
            size={22}
            color={Theme.colors.textSecondary}
          />

          <View style={styles.searchTextContainer}>
            <Text style={styles.searchPlaceholder}>
              Search restaurants, items...
            </Text>
          </View>

          <View style={styles.filterContainer}>
            <IconSec
              name="sliders"
              size={18}
              color={Theme.colors.buttonPrimary}
            />
          </View>

        </Pressable>

        {/* ================= BANNER ================= */}

        <Pressable
          style={({pressed}) => [
            styles.discountContainer,
            pressed && styles.pressed,
          ]}>

          <Image
            style={styles.discountImage}
            source={{
              uri: 'https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg',
            }}
          />

          {/* Overlay */}

          <View style={styles.bannerOverlay}>

            <Text style={styles.bannerSmall}>
              SPECIAL OFFER
            </Text>

            <Text style={styles.bannerTitle}>
              Delicious Food
            </Text>

            <Text style={styles.bannerSubtitle}>
              Up to 50% OFF
            </Text>

            <View style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>
                ORDER NOW
              </Text>
            </View>

          </View>

        </Pressable>

        {/* ================= SERVICES ================= */}

        <View style={styles.servicesContainer}>
          <Services />
        </View>

        {/* ================= TOP RESTAURANTS ================= */}

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Top Restaurants
          </Text>

          <Pressable
            onPress={() => console.log('See all restaurants')}
            hitSlop={8}>

            <Text style={styles.seeAll}>
              See All →
            </Text>

          </Pressable>

        </View>

        <View style={styles.cardsContainer}>
          <Card />
        </View>

        {/* ================= WHAT'S ON YOUR MIND ================= */}

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            What's on your mind?
          </Text>

        </View>

        <View style={styles.foodContainer}>
          <FoodCard />
        </View>

        {/* Bottom spacing */}

        <View style={styles.bottomSpace} />

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  // =====================================================
  // MAIN
  // =====================================================

  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },

  scrollContent: {
    paddingHorizontal: 13,
    paddingBottom: 20,
  },

  // =====================================================
  // HEADER
  // =====================================================

  header: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIconContainer: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  locationInfo: {
    flex: 1,
    paddingHorizontal: 3,
  },

  deliveredText: {
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },

  address: {
    marginTop: 2,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textPrimary,
  },

  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  notificationDot: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: Theme.colors.buttonPrimary,
    top: 8,
    right: 9,
  },

  // =====================================================
  // SEARCH
  // =====================================================

  searchContainer: {
    width: '100%',
    minHeight: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    backgroundColor: Theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  searchTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },

  searchPlaceholder: {
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textLight,
  },

  filterContainer: {
    width: 34,
    height: 34,
    borderLeftWidth: 1,
    borderLeftColor: Theme.colors.divider,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  // =====================================================
  // BANNER
  // =====================================================

  discountContainer: {
    width: '100%',
    height: 190,
    marginTop: 15,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: Theme.colors.primary,
  },

  discountImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 18,
    paddingVertical: 18,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.32)',
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
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.md,
    color: Theme.colors.white,
  },

  bannerButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 7,
    backgroundColor: Theme.colors.white,
  },

  bannerButtonText: {
    fontFamily: Theme.fonts.bold,
    fontSize: 9,
    color: Theme.colors.primary,
  },

  // =====================================================
  // SERVICES
  // =====================================================

  servicesContainer: {
    marginTop: 12,
    marginBottom: 2,
  },

  // =====================================================
  // SECTION HEADER
  // =====================================================

  sectionHeader: {
    marginTop: 17,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    flex: 1,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  seeAll: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.buttonPrimary,
  },

  // =====================================================
  // CARDS
  // =====================================================

  cardsContainer: {
    marginTop: 7,
  },

  foodContainer: {
    marginTop: 7,
  },

  // =====================================================
  // PRESS EFFECT
  // =====================================================

  pressed: {
    opacity: 0.75,
  },

  // =====================================================
  // BOTTOM
  // =====================================================

  bottomSpace: {
    height: 20,
  },
});