import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './PaymentStyle.js'
import { MaterialIcons } from '@expo/vector-icons'; // Import the MaterialIcons from Expo
import { updateTrip } from '../../api/Trip.js';


export default function Payment({navigation,route}) {
  const [selectedOption, setSelectedOption] = useState('Cash');
  const { data,item } = route.params;
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Perform any other actions based on the selected option
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const BookTrip = () =>{
    updateTrip(data.id,item.id)
    // dispatch(setSelectedTrip(item))
    setModalVisible(true)
  }
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
          <Text style={styles.modal_title}>Booking requested !</Text>
           <Text style={styles.modal_content}>Your booking request has been sent successfully. You will be notified once driver approve it.</Text>
           <TouchableOpacity onPress={() => { closeModal(); navigation.navigate("MainScreen", { screen: "My Rides" }); }}>
              <Text style={styles.closeButton}>View Rides</Text>
            
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
     <TouchableOpacity style={styles.submit_button} onPress={()=>{BookTrip() }}  >
                            <Text style={styles.buttonText}>Complete</Text>
                        </TouchableOpacity>
   
     </View>
      </View>
  )
}