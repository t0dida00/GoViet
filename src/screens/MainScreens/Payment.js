import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './PaymentStyle.js'
import { MaterialIcons } from '@expo/vector-icons'; // Import the MaterialIcons from Expo

export default function Payment() {
  const [selectedOption, setSelectedOption] = useState('Cash');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Perform any other actions based on the selected option
  };
  return (
    <View style={styles.container}>
     <View style={styles.payment_box}>
        <View style={styles.card}>
        <TouchableOpacity
          style={[ styles.method, selectedOption === 'Cash' && styles.selectedOption]}
          onPress={() => handleOptionSelect('Cash')}
        >
          <Text>Cash</Text>
          {selectedOption === 'Cash' && (
            <MaterialIcons name="check-circle" size={18} color="green" />
          )}
        </TouchableOpacity>
          <View style={styles.separator}>
          </View>
          <TouchableOpacity
          style={[styles.method, selectedOption === 'Card' && styles.selectedOption]}
          onPress={() => handleOptionSelect('Card')}
            disabled={true}
        >
          <Text>Card</Text>
          {selectedOption === 'Card' && (
            <MaterialIcons name="check-circle" size={18} color="green" />
          )}
        </TouchableOpacity>
          <View style={styles.separator}>

          </View>
          <TouchableOpacity
          style={[styles.method,selectedOption === 'Wallet' && styles.selectedOption]}
          onPress={() => handleOptionSelect('Wallet')}
          disabled={true}
        >
          <Text>Wallet</Text>
          {selectedOption === 'Wallet' && (
            <MaterialIcons name="check-circle" size={18} color="green" />
          )}
        </TouchableOpacity>
        </View>
        <Text style={styles.warning}>
          Support: Cash only from now !
        </Text>
     </View>
     <View style={styles.button_2}>
     <TouchableOpacity style={styles.submit_button}  >
                            <Text style={styles.buttonText}>Complete</Text>
                        </TouchableOpacity>
   
     </View>
      </View>
  )
}