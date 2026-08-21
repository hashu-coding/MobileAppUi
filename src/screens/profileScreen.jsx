import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Theme from '../constants/theme';

const ProfileScreen = ({ navigation }) => {
  const menuItems = [
    {
      id: 1,
      title: 'My Orders',
      subtitle: 'View your order history',
      icon: 'receipt-outline',
      screen: 'Orders',
    },
    {
      id: 2,
      title: 'Saved Addresses',
      subtitle: 'Manage your delivery addresses',
      icon: 'location-outline',
    },
    {
      id: 3,
      title: 'Payment Methods',
      subtitle: 'Cards, UPI & other methods',
      icon: 'card-outline',
    },
    {
      id: 4,
      title: 'Offers & Coupons',
      subtitle: 'View available offers',
      icon: 'pricetag-outline',
      screen: 'Offers',
    },
    {
      id: 5,
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      icon: 'notifications-outline',
    },
  ];

  const supportItems = [
    {
      id: 1,
      title: 'Help & Support',
      icon: 'help-circle-outline',
    },
    {
      id: 2,
      title: 'About FIMA',
      icon: 'information-circle-outline',
    },
    {
      id: 3,
      title: 'Terms & Conditions',
      icon: 'document-text-outline',
    },
    {
      id: 4,
      title: 'Privacy Policy',
      icon: 'shield-checkmark-outline',
    },
  ];

  const handleMenuPress = item => {
    if (item.screen) {
      navigation?.navigate(item.screen);
      return;
    }

    Alert.alert(item.title, 'This section will be available soon.');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          console.log('User logged out');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>My Profile</Text>
            <Text style={styles.headerSubtitle}>Manage your account</Text>
          </View>

          <Pressable
            style={styles.settingsButton}
            onPress={() =>
              Alert.alert('Settings', 'Settings will be available soon.')
            }
          >
            <Icon
              name="settings-outline"
              size={22}
              color={Theme.colors.textPrimary}
            />
          </Pressable>
        </View>

        {/* PROFILE CARD */}

        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: 'https://i.pravatar.cc/300?img=12',
                }}
                style={styles.avatar}
              />

              <Pressable style={styles.editAvatar}>
                <Icon name="camera" size={12} color={Theme.colors.white} />
              </Pressable>
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.userName}>Harsh Indora</Text>

              <Text style={styles.phone}>+91 83989 XXXXX</Text>

              <Text style={styles.email}>harshuindora14@gmail.com</Text>
            </View>

            <Pressable
              style={styles.editButton}
              onPress={() =>
                Alert.alert('Edit Profile', 'Edit profile screen coming soon.')
              }
            >
              <Icon
                name="create-outline"
                size={18}
                color={Theme.colors.primary}
              />
            </Pressable>
          </View>

          {/* PROFILE STATS */}

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>12</Text>

              <Text style={styles.statLabel}>Orders</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.stat}>
              <Text style={styles.statNumber}>4</Text>

              <Text style={styles.statLabel}>Addresses</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.stat}>
              <Text style={styles.statNumber}>₹840</Text>

              <Text style={styles.statLabel}>Saved</Text>
            </View>
          </View>
        </View>

        {/* ACCOUNT */}

        <Text style={styles.sectionTitle}>Account</Text>

        <View style={styles.menuContainer}>
          {menuItems.map(item => (
            <Pressable
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item)}
            >
              <View style={styles.menuIconContainer}>
                <Icon name={item.icon} size={21} color={Theme.colors.primary} />
              </View>

              <View style={styles.menuInfo}>
                <Text style={styles.menuTitle}>{item.title}</Text>

                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>

              <Icon
                name="chevron-forward"
                size={19}
                color={Theme.colors.textLight}
              />
            </Pressable>
          ))}
        </View>

        {/* SUPPORT */}

        <Text style={styles.sectionTitle}>Support & Information</Text>

        <View style={styles.menuContainer}>
          {supportItems.map(item => (
            <Pressable
              key={item.id}
              style={styles.supportItem}
              onPress={() =>
                Alert.alert(item.title, `${item.title} will be available soon.`)
              }
            >
              <Icon
                name={item.icon}
                size={21}
                color={Theme.colors.textSecondary}
              />

              <Text style={styles.supportTitle}>{item.title}</Text>

              <Icon
                name="chevron-forward"
                size={18}
                color={Theme.colors.textLight}
              />
            </Pressable>
          ))}
        </View>

        {/* REFER & EARN */}

        <View style={styles.referCard}>
          <View style={styles.referIcon}>
            <Text style={styles.referEmoji}>🎁</Text>
          </View>

          <View style={styles.referInfo}>
            <Text style={styles.referTitle}>Refer & Earn</Text>

            <Text style={styles.referSubtitle}>
              Invite friends and earn ₹100
            </Text>
          </View>

          <Pressable
            style={styles.referButton}
            onPress={() =>
              Alert.alert('Refer & Earn', 'Referral feature coming soon.')
            }
          >
            <Text style={styles.referButtonText}>INVITE</Text>
          </Pressable>
        </View>

        {/* LOGOUT */}

        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="log-out-outline" size={21} color="#E53935" />

          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>

        <Text style={styles.version}>FIMA v1.0.0</Text>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 13,
  },

  scrollContent: {
    paddingBottom: 20,
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

  settingsButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // PROFILE

  profileCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: 17,
    padding: 14,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarContainer: {
    width: 72,
    height: 72,
    position: 'relative',
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    resizeMode: 'cover',
  },

  editAvatar: {
    position: 'absolute',
    right: -2,
    bottom: -1,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Theme.colors.primary,
    borderWidth: 2,
    borderColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  userInfo: {
    flex: 1,
    marginLeft: 13,
  },

  userName: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  phone: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  email: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: 10,
    color: Theme.colors.textSecondary,
  },

  editButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: Theme.colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // STATS

  statsContainer: {
    marginTop: 16,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.divider,
    flexDirection: 'row',
    alignItems: 'center',
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  statLabel: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: 9,
    color: Theme.colors.textSecondary,
  },

  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: Theme.colors.divider,
  },

  // SECTION

  sectionTitle: {
    marginTop: 21,
    marginBottom: 11,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  // MENU

  menuContainer: {
    backgroundColor: Theme.colors.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    overflow: 'hidden',
  },

  menuItem: {
    minHeight: 68,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.divider,
  },

  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Theme.colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuInfo: {
    flex: 1,
    marginLeft: 11,
  },

  menuTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  menuSubtitle: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: 9,
    color: Theme.colors.textSecondary,
  },

  // SUPPORT

  supportItem: {
    height: 53,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.divider,
  },

  supportTitle: {
    flex: 1,
    marginLeft: 11,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  // REFER

  referCard: {
    marginTop: 18,
    padding: 13,
    borderRadius: 15,
    backgroundColor: Theme.colors.primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
  },

  referIcon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  referEmoji: {
    fontSize: 23,
  },

  referInfo: {
    flex: 1,
    marginLeft: 10,
  },

  referTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textPrimary,
  },

  referSubtitle: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: 9,
    color: Theme.colors.textSecondary,
  },

  referButton: {
    backgroundColor: Theme.colors.primary,
    borderRadius: 7,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  referButtonText: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 9,
  },

  // LOGOUT

  logoutButton: {
    marginTop: 18,
    height: 50,
    borderRadius: 12,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: '#F3D5D5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoutText: {
    marginLeft: 8,
    color: '#E53935',
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.sm,
  },

  version: {
    textAlign: 'center',
    marginTop: 15,
    fontFamily: Theme.fonts.regular,
    fontSize: 9,
    color: Theme.colors.textLight,
  },
});
