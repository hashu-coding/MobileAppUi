import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ setScreen }) => {
  return (
    <LinearGradient colors={['#6C63FF', '#4ECDC4']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.imageContainer}>
          <View style={styles.circle}>
            <Text style={styles.emoji}>🚀</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>

          <Text style={styles.subtitle}>
            Manage your daily tasks, stay organized, and increase your
            productivity.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setScreen('')}>
            <Text style={styles.loginText}>
              Already have an account?{' '}
              <Text style={styles.signIn}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 80,
  },
  content: {
    marginBottom: 30,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    color: '#F5F5F5',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#fff',
    marginTop: 40,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#6C63FF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },
  signIn: {
    fontWeight: 'bold',
  },
});
