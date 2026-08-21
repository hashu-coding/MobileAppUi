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

const PetCare = () => {
  const { setSelectedCategory } = useCategory();

  const categories = [
    { id: 1, title: 'Dog Food', emoji: '🐶' },
    { id: 2, title: 'Cat Food', emoji: '🐱' },
    { id: 3, title: 'Treats', emoji: '🦴' },
    { id: 4, title: 'Toys', emoji: '🧸' },
    { id: 5, title: 'Grooming', emoji: '🛁' },
    { id: 6, title: 'Accessories', emoji: '🐾' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Dog Food',
      quantity: '1 kg',
      price: 399,
      oldPrice: 499,
      image: {
        uri: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg',
      },
    },
    {
      id: 2,
      name: 'Cat Food',
      quantity: '1 kg',
      price: 449,
      oldPrice: 550,
      image: {
        uri: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg',
      },
    },
    {
      id: 3,
      name: 'Dog Treats',
      quantity: '200 g',
      price: 199,
      oldPrice: 249,
      image: {
        uri: 'https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg',
      },
    },
    {
      id: 4,
      name: 'Pet Chew Toy',
      quantity: '1 piece',
      price: 149,
      oldPrice: 199,
      image: {
        uri: 'https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg',
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
          <Text style={styles.title}>Pet Care</Text>
          <Text style={styles.sub}>Everything your pet needs</Text>
        </View>

        <Text style={styles.icon}>🐾</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            style={styles.input}
            placeholder="Search pet food, toys & more"
            placeholderTextColor={Theme.colors.textLight}
          />
        </View>

        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerSmall}>PET CARE</Text>
            <Text style={styles.bannerTitle}>Happy pets, happy home</Text>
            <Text style={styles.bannerSub}>
              Food, toys & essentials for your pets
            </Text>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>SHOP NOW</Text>
            </Pressable>
          </View>

          <Text style={styles.bannerEmoji}>🐶</Text>
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

        <View style={styles.petBanner}>
          <Text style={styles.petEmoji}>🐾</Text>

          <View>
            <Text style={styles.petTitle}>Pet Parents' Choice</Text>
            <Text style={styles.petText}>
              Loved by thousands of pet parents
            </Text>
          </View>
        </View>

        <Text style={styles.section}>Popular for Pets</Text>

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

export default PetCare;

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
  },
  sub: {
    marginTop: 2,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },
  icon: {
    fontSize: 27,
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
    fontSize: 21,
    marginTop: 5,
    maxWidth: 220,
  },
  bannerSub: {
    color: Theme.colors.white,
    fontSize: 11,
    maxWidth: 210,
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
  petBanner: {
    marginTop: 18,
    padding: 14,
    backgroundColor: '#FFF8E6',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  petEmoji: {
    fontSize: 30,
    marginRight: 10,
  },
  petTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.md,
  },
  petText: {
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
