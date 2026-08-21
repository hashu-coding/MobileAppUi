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

const Genie = () => {
  const { setSelectedCategory } = useCategory();

  const services = [
    {
      id: 1,
      title: 'Documents',
      image: {
        uri: 'https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg',
      },
    },
    {
      id: 2,
      title: 'Food Pickup',
      image: {
        uri: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      },
    },
    {
      id: 3,
      title: 'Parcel',
      image: {
        uri: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg',
      },
    },
    {
      id: 4,
      title: 'Shopping',
      image: {
        uri: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
      },
    },
  ];

  const deliveries = [
    {
      id: 1,
      title: 'Send a Package',
      subtitle: 'Pickup & drop anywhere',
      price: 'From ₹49',
      image: {
        uri: 'https://images.pexels.com/photos/5029859/pexels-photo-5029859.jpeg',
      },
    },
    {
      id: 2,
      title: 'Food Pickup',
      subtitle: 'Get food from your favourite place',
      price: 'From ₹39',
      image: {
        uri: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg',
      },
    },
    {
      id: 3,
      title: 'Document Delivery',
      subtitle: 'Fast and secure delivery',
      price: 'From ₹49',
      image: {
        uri: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg',
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

        <View style={styles.headerText}>
          <Text style={styles.title}>Genie</Text>
          <Text style={styles.subtitle}>Pickup & drop made easy</Text>
        </View>

        <Text style={styles.icon}>🛵</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            style={styles.input}
            placeholder="What do you want to send?"
            placeholderTextColor={Theme.colors.textLight}
          />
        </View>

        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerSmall}>GENIE DELIVERY</Text>
            <Text style={styles.bannerTitle}>Send anything</Text>
            <Text style={styles.bannerSub}>
              Pickup & delivery at your doorstep
            </Text>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>BOOK NOW</Text>
            </Pressable>
          </View>

          <Text style={styles.bannerEmoji}>🛵</Text>
        </View>

        <Text style={styles.section}>What can we deliver?</Text>

        <FlatList
          data={services}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable style={styles.service}>
              <Image source={item.image} style={styles.serviceImage} />
              <Text style={styles.serviceTitle}>{item.title}</Text>
            </Pressable>
          )}
        />

        <Text style={styles.section}>Popular Services</Text>

        {deliveries.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.subtitle}</Text>
              <Text style={styles.price}>{item.price}</Text>

              <Pressable style={styles.book}>
                <Text style={styles.bookText}>BOOK</Text>
              </Pressable>
            </View>
          </View>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

export default Genie;

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
    color: Theme.colors.textPrimary,
  },
  headerText: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },
  subtitle: {
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
    marginTop: 15,
    height: 155,
    borderRadius: 18,
    backgroundColor: Theme.colors.primary,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerSmall: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },
  bannerTitle: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.extraBold,
    fontSize: 25,
    marginTop: 4,
  },
  bannerSub: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.regular,
    fontSize: 11,
  },
  bannerEmoji: {
    fontSize: 70,
  },
  button: {
    marginTop: 10,
    backgroundColor: Theme.colors.white,
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 7,
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
  service: {
    width: 85,
    alignItems: 'center',
    marginRight: 12,
  },
  serviceImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  serviceTitle: {
    marginTop: 6,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
  },
  card: {
    backgroundColor: Theme.colors.white,
    borderRadius: 15,
    padding: 10,
    marginBottom: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  cardImage: {
    width: 105,
    height: 105,
    borderRadius: 12,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
  },
  cardSub: {
    marginTop: 4,
    color: Theme.colors.textSecondary,
    fontSize: Theme.fontSize.sm,
  },
  price: {
    marginTop: 7,
    fontFamily: Theme.fonts.bold,
  },
  book: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  bookText: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.bold,
    fontSize: 10,
  },
});
