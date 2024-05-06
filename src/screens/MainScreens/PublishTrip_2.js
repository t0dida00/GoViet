import { View, Text, TouchableOpacity, Picker } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';
import styles from './PublishTrip_2Style';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';

export default function PublishTrip_2({navigation}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('00:00');
  const [count, setCount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState('EUR'); // Default currency
  const currencies = ['EUR', 'USD', 'VND'];
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setShowModal(false);
  };
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    console.log(day.dateString)
    setShowCalendar(false);

  };
  // Function to generate time options jumping by 30 minutes
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const hourStr = ('0' + hour).slice(-2);
        const minuteStr = ('0' + minute).slice(-2);
        options.push({ label: hourStr + ':' + minuteStr, value: hourStr + ':' + minuteStr });
      }
    }
    return options;
  };
  const increment = () => {
    if (count < 3) {
      setCount(count + 1);
    }
    else {
      alert("Maximum passenger is 3")
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    else {
      alert("Minimum passenger is 1")
    }
  };

  const handleSubmit = () => {
       navigation.navigate("Review")
    // Handle form submission, for example, sending the data to backend or navigating to another screen

};
  return (
    <View style={styles.container}>
      <View style={styles.wapper}>
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
            Select Time *
          </Text>

          <Dropdown
            data={generateTimeOptions()}
            value={selectedTime}
            labelField="label"
            valueField="value"
            placeholder="Select Time"
            onChange={(item) => setSelectedTime(item.value)}
            style={styles.input} // Apply your custom styles here
          // Apply your custom styles here
          />
        </View>
        <View style={styles.date_selection}>
          <Text style={styles.date_text}>
            Passenger *
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
        <View style={styles.date_selection}>
          <Text style={styles.date_text}>
            Price per passenger *
          </Text>
          <View style={[styles.person_selection, { paddingVertical: 0, paddingHorizontal:0 }]}>
          <TextInput
      // Add styles for textInput
      placeholder="Enter amount"
      keyboardType="numeric"
    />
            <Dropdown
          data={currencies.map(currency => ({ label: currency, value: currency }))}
          value={selectedCurrency}
            labelField="label"
            valueField="value"
            placeholder="Select Time"
            onChange={(item) => setSelectedCurrency(item.value)}
            style={styles.input_2} // Apply your custom styles here
          // Apply your custom styles here
          />
          </View>
        </View>
        
      </View>
      <TouchableOpacity style={styles.submit_button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
    </View>
  )
}