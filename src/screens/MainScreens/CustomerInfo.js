import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import styles from "./styles.js"
import firestore from '@react-native-firebase/firestore';

export default function CustomerInfo({ navigation, route }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("+358401997250");
    // const {uid } = route.params
    const handleSave = () => {
        // // You can perform actions with the user's input here
        // firestore()
        //     .collection('users')
        //     .doc(uid)
        //     .set({
        //         name: firstName,
        //         email:Email
        //     })
        //     .then(() => {
        //         console.log('User added!');
        //         navigation.navigate("MainScreen")
        //     });
     
        // You can navigate to another screen or perform any other logic here
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your information !</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainer_1}>
                    <TextInput
                        style={styles.input_1}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    />
                    <TextInput
                        style={styles.input_1}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={Email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    value={phoneNumber}
                    editable={false}
                />
            </View>

            <TouchableOpacity style={styles.code_button} onPress={handleSave} >
                <Text style={styles.text_5}>Save</Text>

            </TouchableOpacity>
        </View>
    );
}