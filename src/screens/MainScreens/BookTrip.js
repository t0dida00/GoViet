import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from "./BookTripStyle"
import { Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import { trip } from '../../../redux/selectors/authSelectors';

export default function BookTrip({navigation}) {
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [count, setCount] = useState(1);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
    const handleSubmit = () => {
        const tripData={
            "from": startLocation,
            "to":endLocation,
            "date":selectedDate,
            'person':count
        }
        navigation.navigate("RideList")
        // Handle form submission, for example, sending the data to backend or navigating to another screen

    };
    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        setShowCalendar(false);

    };
    const [message, setMessage] = useState('');


    const closeModal = () => {
        setModalVisible(false);
        setMessage('');
      };
    const increment = () => {
        if (count < 3) {
          setCount(count + 1);
        }
        else{
            setMessage("Maximum passenger is 3")
            setModalVisible(true)
        }
      };
    
      const decrement = () => {
        if (count > 1) {
          setCount(count - 1);
        }
        else{
            setMessage("Minimum passenger is 1")
            setModalVisible(true)
        }
      };

    return (
        <ScrollView style={styles.container} automaticallyAdjustKeyboardInsets={true}>
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{message}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
           
            <View style={styles.logo}>
                <Image
                    source={require("../../assets/logo.png")} // Or use a local image: require('./path/to/image.jpg')
                    style={styles.image}
                />
            </View>

            <View style={styles.booking_container}>
                <View style={styles.booking_box}>
                    <Text style={styles.title}>
                        Where would you like to explore ?
                    </Text>
                    <View style={styles.place_selection}>
                        <TextInput
                            style={styles.input}
                            placeholder="Start Location"
                            value={startLocation}
                            onChangeText={setStartLocation}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="End Location"
                            value={endLocation}
                            onChangeText={setEndLocation}
                        />
                        </View>
                    <View style={styles.date_selection}>
                        <Text style={styles.date_text}>
                            Select Date *
                        </Text>
                        <TouchableOpacity
                            style={styles.input}
                            onPress={() => setShowCalendar(true)}
                        >
                            <Text>{selectedDate || 'Select Date'}</Text>
                        </TouchableOpacity>
                        {showCalendar && (
                            <Calendar
                                onDayPress={onDayPress}
                                markedDates={{ [selectedDate]: { selected: true } }}
                                minDate={new Date().toISOString().split('T')[0]} // Set minDate to today's date
                            />
                        )}
                    </View>
                    <View style={styles.date_selection}>
                        <Text style={styles.date_text}>
                            Person *
                        </Text>
                        <View style={styles.person_selection}>
                            <TouchableOpacity onPress={decrement} style={styles.button}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.number}>{count}</Text>
                            <TouchableOpacity onPress={increment} style={styles.button}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.submit_button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Search</Text>
                        </TouchableOpacity>
                </View>
                 
                   
            </View>
        </ScrollView>
    )
}