import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import React from 'react'
import { Avatar, Icon } from 'react-native-elements'; // Make sure you import Avatar and Icon from the correct library
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors/authSelectors';

import styles from "./ProfileStyle.js"

const Profile = ({ avatarUrl, name, email, phoneNumber, onEditPress, navigation }) => {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    const user = useSelector(selectUser);

    console.log(user)
    const handleSignOut = async () => {
        try {
            await auth().signOut();
            console.log('User signed out successfully');
            navigation.navigate("WelcomeScreen")
            // Optionally, navigate to a different screen after sign-out
        } catch (error) {
            console.error('Error signing out:', error);
            // Handle sign-out error
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={styles.container_2}>
                    <View style={styles.container_1}>
                        <Avatar
                            rounded
                            source={{ uri: "https://i.pravatar.cc/150" }}
                            size="large"
                            containerStyle={styles.avatar}
                        />
                        <View style={styles.container_3}>
                            <Text style={styles.name}>{user?.name}</Text>
                            <Text style={styles.email}>{user?.email}</Text>
                            <Text style={styles.phoneNumber}>{user?.phone}</Text>
                        </View>
                        <TouchableOpacity onPress={onEditPress} style={styles.editButton}>
                            <Icon name="edit" type="material" color="#000" />
                        </TouchableOpacity>

                    </View>
                    <TextInput
                        style={styles.travel_preference}
                        placeholder="Type something..."
                        placeholderTextColor="#555"
                        multiline={true}
                        numberOfLines={4} // Adjust as needed
                    />
                </View>
            </TouchableWithoutFeedback>
            <Button title="Sign Out" onPress={handleSignOut} />

        </ScrollView >
    );
};
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',

//         padding: 10,
//         height: 10000,
//     },
//     avatar: {
//         marginRight: 10,
//     },
//     detailsContainer: {
//         flex: 1,

//     },
//     name: {
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     email: {
//         marginBottom: 5,
//     },
//     phoneNumber: {
//         marginBottom: 5,
//     },
//     editButton: {
//         marginLeft: 'auto',
//     },
// });

export default Profile;