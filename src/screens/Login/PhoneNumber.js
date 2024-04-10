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
    const [number, setNumber] = useState('+358401997250');
    const [selectedValue, setSelectedValue] = useState('+84');
    const inputRef = useRef(null);
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [confirm, setConfirm] = useState(null);

    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');
    const onChangeText = (inputNumber) => {
        // Remove non-numeric characters using regular expression
        const cleanedText = inputNumber.replace(/[^0-9]/g, '');
        setNumber(cleanedText);
    };
    // Handle login
    function onAuthStateChanged(user) {
        if (user) {
            console.log(user)
            // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
            // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
            // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
            // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
        }
    }

 

    // Handle the button press
    // async function signInWithPhoneNumber(phoneNumber) {
    //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    //     console.log(confirmation)
    //     setConfirm(confirmation);
    // }

    // async function confirmCode() {
    //     console.log('clicked')
    //     try {
    //        const response = await confirm.confirm(code);
    //        console.log(response)
    //     } catch (error) {
    //         console.log('Invalid code.');
    //     }
    // }
    useEffect(() => {
        if (inputRef.current) {
            // Focus the TextInput after the component has rendered
            inputRef.current.focus();
        }
    }, []); // Run this effect only once after the initial render

    const GetVerifyCode = () => {

        navigation.navigate('VerifyStep',{phoneNumber:number})
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