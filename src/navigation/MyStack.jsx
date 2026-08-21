import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart';
import homeScreen from '../screens/homeScreen';
import Grocery from '../screens/Grocery';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Grocery" component={Grocery} />
    </Stack.Navigator>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
