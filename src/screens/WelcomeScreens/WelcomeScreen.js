import { View, Text, SafeAreaView, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from "./styles.js"
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth'; // Import Firebase Authentication
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { checkUserExistence } from '../../../redux/actions/authActions'; // Import your action creator

export default function WelcomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch(); // Initialize useDispatch hook

  //Always loading when open the app
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return () => unsubscribe(); // Cleanup the event listener on unmount
  }, []);
  //Check login
  const onAuthStateChanged = async (user) => {
    if (user) {
      const { uid } = user;
      dispatch(checkUserExistence(uid, navigation))
    }

  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Render the second screen content once loading is complete
  return (
    <View style={styles.container2}>
      <Image
        source={require("../../assets/logo.png")} // Or use a local image: require('./path/to/image.jpg')
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Welcome to GoViet ! {'\n'}  Enjoy your trip with locals</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.signUpButton}  >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logInButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logInText}>Log in</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );

}