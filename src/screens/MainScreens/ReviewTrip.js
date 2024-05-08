import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Modal } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './ReviewTripStyle'; // Import your custom styles
import { MaterialIcons } from '@expo/vector-icons'; // Import the MaterialIcons from Expo

export default function ReviewTrip() {
    const [startLocation, setStartLocation] = useState('Lac quang Church');
    const [endLocation, setEndLocation] = useState('Tan binh market');
    const [date, setDate] = useState(new Date('2024-05-10'));
    const [time, setTime] = useState('10:30');
    const [passenger, setPassenger] = useState('3');
    const [price, setPrice] = useState('10');
    const [modalVisible, setModalVisible] = useState(false);
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    
    const handleTimeChange = (newTime) => {
        setTime(newTime);
    };

    const handlePublish = () => {
        // Handle publishing the trip with the provided details
        console.log('Publishing trip with details:', {
            startLocation,
            endLocation,
            date,
            time,
            passenger,
            price,
        });
        setModalVisible(true)
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name="check-circle" size={18} color="green" />
                        <Text style={styles.modal_title}>Ride posted susccesful !</Text>
                        <Text style={styles.modal_content}>You will be notified once a booking request is sent from Passenger.
                            {"\n"}You can Accept or Decline the booking request from
                            {"\n"}My Rides -Ride Details Sections</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={styles.closeButton}>View Rides</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={styles.label}>Start location:</Text>
            <TextInput
                style={styles.input}
                value={startLocation}
                onChangeText={setStartLocation}
                editable={false} // Make read-only
            />
            <Text style={styles.label}>End location:</Text>
            <TextInput
                style={styles.input}
                value={endLocation}
                onChangeText={setEndLocation}
                editable={false} // Make read-only
            />
            <Text style={styles.label}>Date:</Text>
            <TextInput
                style={styles.input}
                value={date.toLocaleDateString()}
                editable={false} // Make read-only
            />
            <Text style={styles.label}>Time:</Text>
            <TextInput
                style={styles.input}
                value={time}
                onChangeText={handleTimeChange}
                editable={false} // Make read-only
            />
            <Text style={styles.label}>Passenger:</Text>
            <TextInput
                style={styles.input}
                value={passenger}
                onChangeText={setPassenger}
                keyboardType="numeric"
                editable={false} // Make read-only
            />
            <Text style={styles.label}>Price:</Text>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                editable={false} // Make read-only
            />
            <Button title="Publish" onPress={handlePublish} />
        </View>
    );
}