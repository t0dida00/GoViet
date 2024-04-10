import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationWrapper from './src/navigation';
import { firebase } from '@react-native-firebase/auth'; // Import Firebase Authentication
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  // firebase.initializeApp(firebaseConfig);
  

  return (
    <NavigationWrapper />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
