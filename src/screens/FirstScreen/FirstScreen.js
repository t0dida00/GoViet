import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import styles from "./styles.js"
export default function FirstScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 3000); // 3000 milliseconds = 3 seconds

        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);

    return (
        <View style={styles.container}>
            <Text>FirstScreen</Text>
        </View>
    )
}