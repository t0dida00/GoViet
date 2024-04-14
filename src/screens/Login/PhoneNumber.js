import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import styles from "./styles.js"
import { phonePrefixes } from '../../assets/phoneData.js';
// import { auth } from "../../../firebaseConfig.js"
import auth from '@react-native-firebase/auth';

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
export default function PhoneNumber({ navigation }) {
    // If null, no SMS has been sent
    const [number, setNumber] = useState('');
    const [selectedValue, setSelectedValue] = useState('+84');
    const inputRef = useRef(null);

    // verification code (OTP - One-Time-Passcode)

    const onChangeText = (inputNumber) => {
        // Remove non-numeric characters using regular expression
        const cleanedText = inputNumber.replace(/[^0-9]/g, '');
        setNumber(cleanedText);
    };



    useEffect(() => {
        if (inputRef.current) {
            // Focus the TextInput after the component has rendered
            inputRef.current.focus();
        }
    }, []); // Run this effect only once after the initial render

    const GetVerifyCode = () => {

        navigation.navigate('VerifyStep', { phoneNumber: selectedValue + number })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text_4}>Enter you mobile phone</Text>
            <View style={styles.phone_box}>
                <Dropdown
                    data={phonePrefixes}
                    value={selectedValue}
                    labelField="value"
                    valueField="value"
                    search
                    maxHeight={300}
                    placeholder="Prefix"
                    onChange={item => {
                        setSelectedValue(item.value);
                        setNumber('');
                        inputRef.current.focus();
                    }}

                    style={styles.dropdown}
                />
                <TextInput
                    ref={inputRef}
                    style={styles.input_field}
                    onChangeText={onChangeText}
                    value={number}
                    keyboardType="numeric"
                    placeholder="401111111"
                    returnKeyType="done"
                />

            </View>
            <TouchableOpacity style={styles.code_button} onPress={() => { GetVerifyCode() }}>
                <Text style={styles.text_5}>Get code</Text>

            </TouchableOpacity>


        </View>
    )
}