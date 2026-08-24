import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/navigation/BottomTab';
import { CategoryProvider } from './src/context/Context';

const App = () => {
  return (
    <CategoryProvider>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </CategoryProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
