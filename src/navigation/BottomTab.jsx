import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from '../screens/homeScreen';
import searchScreen from '../screens/searchScreen';
import orderScreen from '../screens/orderScreen';
import profileScreen from '../screens/profileScreen';
import offerScreen from '../screens/offerScreen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Theme from '../constants/theme';
import MyStack from './MyStack';

const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.buttonPrimary,
        tabBarInactiveTintColor: Theme.colors.icon,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={searchScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Order"
        component={orderScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Offer"
        component={offerScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="tag" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={profileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="user-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
