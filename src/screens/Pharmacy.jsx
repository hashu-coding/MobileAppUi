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

const Pharmacy = () => {
  const { setSelectedCategory } = useCategory();

  const categories = [
    { id: 1, title: 'Medicines', emoji: '💊' },
    { id: 2, title: 'Vitamins', emoji: '💙' },
    { id: 3, title: 'Personal Care', emoji: '🧴' },
    { id: 4, title: 'First Aid', emoji: '🩹' },
    { id: 5, title: 'Baby Care', emoji: '👶' },
    { id: 6, title: 'Wellness', emoji: '🌿' },
  ];

  const products = [
    {
      id: 1,
      name: 'Vitamin C Tablets',
      quantity: '30 tablets',
      price: 199,
      oldPrice: 249,
      image: {
        uri: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg',
      },
    },
    {
      id: 2,
      name: 'Hand Sanitizer',
      quantity: '100 ml',
      price: 89,
      oldPrice: 110,
      image: {
        uri: 'https://images.pexels.com/photos/3987154/pexels-photo-3987154.jpeg',
      },
    },
    {
      id: 3,
      name: 'Digital Thermometer',
      quantity: '1 unit',
      price: 299,
      oldPrice: 399,
      image: {
        uri: 'https://images.pexels.com/photos/3873174/pexels-photo-3873174.jpeg',
      },
    },
    {
      id: 4,
      name: 'First Aid Kit',
      quantity: '1 kit',
      price: 349,
      oldPrice: 450,
      image: {
        uri: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.back}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <View style={styles.headerInfo}>
          <Text style={styles.title}>Pharmacy</Text>
          <Text style={styles.sub}>Healthcare delivered to you</Text>
        </View>

        <Text style={styles.icon}>💊</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            style={styles.input}
            placeholder="Search medicines & healthcare"
            placeholderTextColor={Theme.colors.textLight}
          />
        </View>

        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerSmall}>PHARMACY</Text>
            <Text style={styles.bannerTitle}>Healthcare at home</Text>
            <Text style={styles.bannerSub}>Fast & reliable delivery</Text>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>SHOP NOW</Text>
            </Pressable>
          </View>

          <Text style={styles.bannerEmoji}>💊</Text>
        </View>

        <Text style={styles.section}>Shop by Category</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable style={styles.category}>
              <View style={styles.categoryIcon}>
                <Text style={styles.emoji}>{item.emoji}</Text>
              </View>
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </Pressable>
          )}
        />

        <View style={styles.infoBanner}>
          <Text style={styles.infoIcon}>✓</Text>
          <View>
            <Text style={styles.infoTitle}>Genuine Products</Text>
            <Text style={styles.infoText}>Quality healthcare products</Text>
          </View>
        </View>

        <Text style={styles.section}>Popular Healthcare Products</Text>

        {products.map(item => (
          <View key={item.id} style={styles.product}>
            <Image source={item.image} style={styles.productImage} />

            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.quantity}>{item.quantity}</Text>

              <View style={styles.priceRow}>
                <View style={styles.prices}>
                  <Text style={styles.price}>₹{item.price}</Text>
                  <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
                </View>

                <Pressable style={styles.add}>
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

export default Pharmacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 13,
  },
  header: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 30,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },
  sub: {
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },
  icon: {
    fontSize: 25,
  },
  search: {
    height: 52,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  searchIcon: {
    fontSize: 25,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontFamily: Theme.fonts.regular,
  },
  banner: {
    height: 155,
    marginTop: 15,
    borderRadius: 18,
    backgroundColor: Theme.colors.primary,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerSmall: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },
  bannerTitle: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.extraBold,
    fontSize: 22,
    marginTop: 5,
  },
  bannerSub: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.regular,
    fontSize: 11,
  },
  bannerEmoji: {
    fontSize: 65,
  },
  button: {
    marginTop: 10,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 7,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },
  section: {
    marginTop: 20,
    marginBottom: 12,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },
  category: {
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 28,
  },
  categoryTitle: {
    marginTop: 6,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    textAlign: 'center',
  },
  infoBanner: {
    marginTop: 18,
    padding: 13,
    backgroundColor: '#EAFBF0',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: Theme.colors.success,
    color: Theme.colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    marginRight: 10,
  },
  infoTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.md,
  },
  infoText: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },
  product: {
    backgroundColor: Theme.colors.white,
    borderRadius: 15,
    padding: 10,
    marginBottom: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  productImage: {
    width: 105,
    height: 105,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  productName: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
  },
  quantity: {
    marginTop: 4,
    color: Theme.colors.textSecondary,
    fontSize: Theme.fontSize.sm,
  },
  priceRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.lg,
  },
  oldPrice: {
    marginLeft: 7,
    color: Theme.colors.textLight,
    textDecorationLine: 'line-through',
    fontSize: Theme.fontSize.xs,
  },
  add: {
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  addText: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
  },
});
