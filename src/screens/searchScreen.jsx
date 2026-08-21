import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../constants/theme';

const searchScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const recentSearches = [
    'Chicken Biryani',
    'Burger',
    'Milk',
    'Pizza',
    'Chicken',
  ];

  const popularSearches = [
    {
      id: 1,
      title: 'Biryani',
      image: {
        uri: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      },
    },
    {
      id: 2,
      title: 'Burger',
      image: {
        uri: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
      },
    },
    {
      id: 3,
      title: 'Pizza',
      image: {
        uri: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
      },
    },
    {
      id: 4,
      title: 'Momos',
      image: {
        uri: 'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg',
      },
    },
    {
      id: 5,
      title: 'Fruits',
      image: {
        uri: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
      },
    },
    {
      id: 6,
      title: 'Milk',
      image: {
        uri: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
      },
    },
  ];

  const results = [
    {
      id: 1,
      name: 'Chicken Biryani',
      type: 'Food',
      restaurant: 'Behrouz Biryani',
      price: '₹299',
      image: {
        uri: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      },
    },
    {
      id: 2,
      name: 'Chicken Burger',
      type: 'Food',
      restaurant: "McDonald's",
      price: '₹249',
      image: {
        uri: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
      },
    },
    {
      id: 3,
      name: 'Fresh Milk',
      type: 'Grocery',
      restaurant: 'Instamart',
      price: '₹61',
      image: {
        uri: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
      },
    },
  ];

  const filteredResults = results.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={22} color={Theme.colors.textPrimary} />
        </Pressable>

        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* SEARCH BOX */}

      <View style={styles.searchContainer}>
        <Icon
          name="search-outline"
          size={23}
          color={Theme.colors.textSecondary}
        />

        <TextInput
          value={search}
          onChangeText={setSearch}
          autoFocus
          placeholder="Search food, groceries & more"
          placeholderTextColor={Theme.colors.textLight}
          style={styles.input}
        />

        {search.length > 0 && (
          <Pressable onPress={() => setSearch('')}>
            <Icon
              name="close-circle"
              size={21}
              color={Theme.colors.textSecondary}
            />
          </Pressable>
        )}
      </View>

      {/* SEARCH RESULTS */}

      {search.length > 0 ? (
        <View style={styles.resultContainer}>
          <Text style={styles.sectionTitle}>Search Results</Text>

          {filteredResults.length > 0 ? (
            <FlatList
              data={filteredResults}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable style={styles.resultCard}>
                  <Image source={item.image} style={styles.resultImage} />

                  <View style={styles.resultInfo}>
                    <Text style={styles.resultName}>{item.name}</Text>

                    <Text style={styles.resultRestaurant}>
                      {item.restaurant}
                    </Text>

                    <View style={styles.resultBottom}>
                      <Text style={styles.resultType}>{item.type}</Text>

                      <Text style={styles.resultPrice}>{item.price}</Text>
                    </View>
                  </View>

                  <Icon
                    name="chevron-forward"
                    size={19}
                    color={Theme.colors.textLight}
                  />
                </Pressable>
              )}
            />
          ) : (
            <View style={styles.empty}>
              <Text style={styles.emptyEmoji}>🔍</Text>

              <Text style={styles.emptyTitle}>No results found</Text>

              <Text style={styles.emptyText}>
                Try searching for something else
              </Text>
            </View>
          )}
        </View>
      ) : (
        <>
          {/* RECENT SEARCHES */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>

            <Pressable>
              <Text style={styles.clearText}>Clear All</Text>
            </Pressable>
          </View>

          <View style={styles.recentContainer}>
            {recentSearches.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => setSearch(item)}
                style={styles.recentItem}
              >
                <Icon
                  name="time-outline"
                  size={18}
                  color={Theme.colors.textSecondary}
                />

                <Text style={styles.recentText}>{item}</Text>

                <Icon
                  name="arrow-up-outline"
                  size={16}
                  color={Theme.colors.textLight}
                />
              </Pressable>
            ))}
          </View>

          {/* POPULAR */}

          <Text style={styles.sectionTitle}>Popular Searches</Text>

          <FlatList
            data={popularSearches}
            numColumns={3}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.popularList}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setSearch(item.title)}
                style={styles.popularCard}
              >
                <Image source={item.image} style={styles.popularImage} />

                <Text style={styles.popularTitle}>{item.title}</Text>
              </Pressable>
            )}
          />

          {/* BOTTOM TEXT */}

          <View style={styles.bottomInfo}>
            <Icon
              name="sparkles-outline"
              size={20}
              color={Theme.colors.primary}
            />

            <Text style={styles.bottomText}>
              Search across Food, Grocery, Pharmacy & more
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default searchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 13,
  },

  // HEADER

  header: {
    height: 65,
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

  headerTitle: {
    marginLeft: 13,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.xl,
    color: Theme.colors.textPrimary,
  },

  // SEARCH

  searchContainer: {
    height: 52,
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  input: {
    flex: 1,
    height: 52,
    marginLeft: 9,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textPrimary,
  },

  // SECTION

  sectionHeader: {
    marginTop: 23,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    marginTop: 22,
    marginBottom: 12,
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.lg,
    color: Theme.colors.textPrimary,
  },

  clearText: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.sm,
  },

  // RECENT

  recentContainer: {
    backgroundColor: Theme.colors.white,
    borderRadius: 12,
    paddingHorizontal: 13,
  },

  recentItem: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.divider,
  },

  recentText: {
    flex: 1,
    marginLeft: 10,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  // POPULAR

  popularList: {
    paddingBottom: 15,
  },

  columnWrapper: {
    justifyContent: 'space-between',
  },

  popularCard: {
    width: '31%',
    backgroundColor: Theme.colors.white,
    borderRadius: 12,
    padding: 7,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  popularImage: {
    width: '100%',
    height: 80,
    borderRadius: 9,
    resizeMode: 'cover',
  },

  popularTitle: {
    marginTop: 7,
    textAlign: 'center',
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  // RESULTS

  resultContainer: {
    flex: 1,
  },

  resultCard: {
    minHeight: 90,
    backgroundColor: Theme.colors.white,
    borderRadius: 13,
    marginBottom: 10,
    padding: 9,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  resultImage: {
    width: 72,
    height: 72,
    borderRadius: 10,
  },

  resultInfo: {
    flex: 1,
    marginLeft: 11,
  },

  resultName: {
    fontFamily: Theme.fonts.semiBold,
    fontSize: Theme.fontSize.md,
    color: Theme.colors.textPrimary,
  },

  resultRestaurant: {
    marginTop: 3,
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },

  resultBottom: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  resultType: {
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.primary,
  },

  resultPrice: {
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSize.sm,
    color: Theme.colors.textPrimary,
  },

  // EMPTY

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyEmoji: {
    fontSize: 50,
  },

  emptyTitle: {
    marginTop: 12,
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

  // BOTTOM

  bottomInfo: {
    marginTop: 15,
    marginBottom: 20,
    padding: 13,
    borderRadius: 12,
    backgroundColor: Theme.colors.primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomText: {
    marginLeft: 8,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSize.xs,
    color: Theme.colors.textSecondary,
  },
});
