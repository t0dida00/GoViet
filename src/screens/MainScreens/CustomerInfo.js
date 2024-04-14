import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import styles from "./styles.js"
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector and useDispatch
import { updateUserInfo } from '../../../redux/actions/userAction.js';
import { selectUser } from '../../../redux/selectors/authSelectors.js';

export default function CustomerInfo({ navigation, route }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("+358401997250");
    const dispatch = useDispatch(); // Initialize useDispatch hook
    const state = useSelector(selectUser)
    // const {uid } = route.params
    const handleSave = () => {
        const userData = { ...state, name: firstName, email: Email, phone: phoneNumber }
        dispatch(updateUserInfo(userData, navigation))
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