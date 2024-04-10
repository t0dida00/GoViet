import { View, Text, SafeAreaView, TextInput, ActivityIndicator, Modal, Button } from 'react-native'
import React, { useEffect, useRef, useState, } from 'react'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import auth from '@react-native-firebase/auth';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import firestore from '@react-native-firebase/firestore';

const CELL_COUNT = 6;
import styles from "./styles.js"

export default function VerifyScreen({ navigation, route }) {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const { phoneNumber } = route.params
    const inputRef = useRef(null);
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [error, setError] = useState(null)
    const [showModal, setShowModal] = useState(false);

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const onChangeText = (input) => {
        setCode(input)
        if (input.length === 6) {
            confirmCode(input)

        }
    }
    // async function onAuthStateChanged(user) {
    //     if (user) {
    //         const { uid } = user;
    //         try {
    //             const documentSnapshot = await firestore()
    //                 .collection('users')
    //                 .doc(uid)
    //                 .get();
    //             if (documentSnapshot.exists) {
    //                 // If user exists, navigate to the Profile screen
    //                 navigation.navigate("MainScreen",{ screen: "Profile" });
    //             } else {
    //                                   // If user doesn't exist, navigate to the CustomerInfo screen
    //                 navigation.navigate("CustomerInfo", { uid, isNewUser: true });
    //             }
    //         } catch (error) {
    //             console.error('Error checking user existence: ', error);
    //             // Handle error, such as showing an error message to the user
    //         }
    //     }
    // }
    

    useEffect(() => {
        // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        signInWithPhoneNumber(phoneNumber)
        // return subscriber; // unsubscribe on unmount
    }, []);

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode(code) {
        try {
            setLoading(true)

            await confirm.confirm(code);
            setLoading(false);
            // navigation.navigate("CustomerInfo")

        } catch (error) {
            setLoading(false)
            setError('Invalid code.')
            setShowModal(true)
            console.log('Invalid code.');

        }
    }
    useEffect(() => {
        if (inputRef.current) {
            // Focus the TextInput after the component has rendered
            inputRef.current.focus();
        }
    }, []); // Run this effect only once after the initial render

    return (
        <View style={styles.container}>
            <Text style={[styles.text_4]}>Phone number Verification</Text>
            <Text style={styles.text_6}>Please enter the verification code sent to {phoneNumber}</Text>
            <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={code}
                onChangeText={onChangeText}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                // autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                testID="my-code-input"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />

            {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />}
            <Modal
                visible={showModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Invalid code. Please try again.</Text>
                        <Button title="OK" onPress={() => setShowModal(false)} />
                    </View>
                </View>
            </Modal>
        </View >
    )
}