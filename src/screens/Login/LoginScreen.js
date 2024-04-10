import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles.js"

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text_1}>To enjoy more rides</Text>
            <Text style={styles.text_2}>Login Here !</Text>
            <View style={styles.box}>
                <Text style={[styles.text_3, { fontWeight: '600' }]}>Choose an option</Text>
                <View style={styles.flex_box}>
                    <TouchableOpacity onPress={() => navigation.navigate('Phone')}>
                        <Text style={styles.text_3}>Phone number</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />

                    <TouchableOpacity onPress={() => console.log('pressed')}>
                        <Text style={styles.text_3}>Facebook</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />

                    <TouchableOpacity onPress={() => console.log('pressed')}>
                        <Text style={styles.text_3}>Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}