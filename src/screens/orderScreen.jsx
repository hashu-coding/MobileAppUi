import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../constants/theme';

const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const ongoingOrders = [
    {
      id: '1',
      restaurant: "McDonald's",
      type: 'Food',
      status: 'Out for delivery',
      statusColor: '#16A34A',
      time: 'Arriving in 15 mins',
      items: ['Chicken Burger', 'French Fries', 'Coke'],
      total: 449,
      image: {
        uri: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
      },
    },
    {
      id: '2',
      restaurant: 'Instamart',
      type: 'Grocery',
      status: 'Preparing your order',
      statusColor: '#F59E0B',
      time: 'Arriving in 8 mins',
      items: ['Milk', 'Bananas', 'Bread'],
      total: 236,
      image: {
        uri: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
      },
    },
  ];

  const pastOrders = [
    {
      id: '3',
      restaurant: 'Behrouz Biryani',
      type: 'Food',
      status: 'Delivered',
      statusColor: '#16A34A',
      time: 'Delivered on 10 Aug',
      items: ['Chicken Biryani', 'Raita'],
      total: 349,
      image: {
        uri: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      },
    },
    {
      id: '4',
      restaurant: 'Fresh Meat',
      type: 'Meat',
      status: 'Delivered',
      statusColor: '#16A34A',
      time: 'Delivered on 8 Aug',
      items: ['Chicken Curry Cut 500g'],
      total: 189,
      image: {
        uri: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
      },
    },
    {
      id: '5',
      restaurant: 'Pharmacy',
      type: 'Pharmacy',
      status: 'Delivered',
      statusColor: '#16A34A',
      time: 'Delivered on 5 Aug',
      items: ['Vitamin C Tablets', 'Hand Sanitizer'],
      total: 288,
      image: {
        uri: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg',
      },
    },
  ];

  const orders = activeTab === 'ongoing' ? ongoingOrders : pastOrders;

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>My Orders</Text>
          <Text style={styles.headerSubtitle}>
            Track and manage your orders
          </Text>
        </View>

        <Pressable style={styles.helpButton}>
          <Icon
            name="help-circle-outline"
            size={23}
            color={Theme.colors.textPrimary}
          />
        </Pressable>
      </View>

      {/* TABS */}

      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, activeTab === 'ongoing' && styles.activeTab]}
          onPress={() => setActiveTab('ongoing')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'ongoing' && styles.activeTabText,
            ]}
          >
            Ongoing
          </Text>

          {ongoingOrders.length > 0 && (
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{ongoingOrders.length}</Text>
            </View>
          )}
        </Pressable>

        <Pressable
          style={[styles.tab, activeTab === 'past' && styles.activeTab]}
          onPress={() => setActiveTab('past')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'past' && styles.activeTabText,
            ]}
          >
            Past Orders
          </Text>
        </Pressable>
      </View>

      {/* ORDERS */}

      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>📦</Text>

            <Text style={styles.emptyTitle}>No orders yet</Text>

            <Text style={styles.emptyText}>Your orders will appear here</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            {/* TOP */}

            <View style={styles.orderTop}>
              <View style={styles.restaurantImageContainer}>
                <Image source={item.image} style={styles.restaurantImage} />
              </View>

              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName} numberOfLines={1}>
                  {item.restaurant}
                </Text>

                <Text style={styles.orderType}>{item.type}</Text>

                <Text style={styles.itemText}>{item.items.join(' • ')}</Text>
              </View>

              <Icon
                name="chevron-forward"
                size={20}
                color={Theme.colors.textLight}
              />
            </View>

            {/* STATUS */}

            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusDot,
                  {
                    backgroundColor: item.statusColor,
                  },
                ]}
              />

              <View style={styles.statusInfo}>
                <Text
                  style={[
                    styles.status,
                    {
                      color: item.statusColor,
                    },
                  ]}
                >
                  {item.status}
                </Text>

                <Text style={styles.time}>{item.time}</Text>
              </View>

              {activeTab === 'ongoing' && (
                <Pressable style={styles.trackButton}>
                  <Text style={styles.trackText}>TRACK</Text>
                </Pressable>
              )}
            </View>

            {/* BOTTOM */}

            <View style={styles.orderBottom}>
              <View>
                <Text style={styles.itemCount}>{item.items.length} items</Text>

                <Text style={styles.total}>Total ₹{item.total}</Text>
              </View>

              {activeTab === 'past' && (
                <Pressable style={styles.reorderButton}>
                  <Icon
                    name="refresh-outline"
                    size={17}
                    color={Theme.colors.primary}
                  />

                  <Text style={styles.reorderText}>REORDER</Text>
                </Pressable>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default OrderScreen;

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

  helpButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  // TABS

  tabs: {
    height: 48,
    backgroundColor: Theme.colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 4,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  tab: {
    flex: 1,
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: Theme.colors.primary,
  },

  tabText: {
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textSecondary,
  },

  activeTabText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.semiBold,
  },

  countBadge: {
    marginLeft: 6,
    minWidth: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  countText: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },

  // LIST

  list: {
    paddingTop: 15,
    paddingBottom: 25,
  },

  // ORDER CARD

  orderCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: 16,
    marginBottom: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  orderTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  restaurantImageContainer: {
    width: 65,
    height: 65,
    borderRadius: 10,
    overflow: 'hidden',
  },

  restaurantImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  restaurantInfo: {
    flex: 1,
    marginLeft: 11,
  },

  restaurantName: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  orderType: {
    marginTop: 2,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.primary,
  },

  itemText: {
    marginTop: 5,
    fontFamily: Theme.fonts.regular,
    fontSize: 10,
    color: Theme.colors.textSecondary,
  },

  // STATUS

  statusContainer: {
    marginTop: 13,
    padding: 10,
    backgroundColor: Theme.colors.background,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },

  statusInfo: {
    flex: 1,
    marginLeft: 8,
  },

  status: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.sm,
  },

  time: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: 10,
    color: Theme.colors.textSecondary,
  },

  trackButton: {
    backgroundColor: Theme.colors.primary,
    borderRadius: 7,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  trackText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 9,
  },

  // BOTTOM

  orderBottom: {
    marginTop: 12,
    paddingTop: 11,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.divider,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemCount: {
    fontFamily: Theme.fonts.regular,
    fontSize: 10,
    color: Theme.colors.textSecondary,
  },

  total: {
    marginTop: 2,
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textPrimary,
  },

  reorderButton: {
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },

  reorderText: {
    marginLeft: 5,
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },

  // EMPTY

  empty: {
    marginTop: 120,
    alignItems: 'center',
  },

  emptyEmoji: {
    fontSize: 55,
  },

  emptyTitle: {
    marginTop: 15,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  emptyText: {
    marginTop: 5,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textSecondary,
  },
});
