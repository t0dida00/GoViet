import { View, Text, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './MyRidesStyle'
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'; // Import the MaterialIcons from Expo

const data = [{
    id: "123",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
}, {
    id: "124323",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
}, {
    id: "122343",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "15:04 2022-04-24",
    price: "10",
    name: "Khoa"
}];
export default function MyRides() {
    const [selectedMode, setSelectedMode] = useState('Booked')
    const [modalVisible, setModalVisible] = useState(false);

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
                        <Text style={styles.modal_title}>Booking Approved !</Text>
                        <Text style={styles.modal_content}>ABC will travel with you</Text>
                        <TouchableOpacity onPress={()=>closeModal()}>
                            <Text style={styles.closeButton}>Close</Text>

                        </TouchableOpacity>
                    </View>
                   
                </View>
            </Modal>
            <View style={styles.switch_button_container}>
                <View style={styles.switch_button_wrapper} >
                    <TouchableOpacity onPress={() => setSelectedMode('Published')} style={selectedMode === "Published" ? styles.mode : {}} >
                        <Text style={selectedMode === "Published" ? { fontWeight: '600' } : {}}>
                            Published Rides
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedMode('Booked')} style={selectedMode === "Booked" ? styles.mode : {}} >
                        <Text style={selectedMode === "Booked" ? { fontWeight: '600' } : {}}>
                            Booked Rides
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.list_view}>


                <ScrollView >
                    {data.map(ride => (
                        <View key={ride.id} style={styles.card} >
                            <View >
                                <Text>ID: {ride.id}</Text>
                            </View>
                            <View style={styles.header}>
                                <Avatar
                                    rounded
                                    source={{ uri: ride.avatar ? ride.avatar : "https://i.pravatar.cc/150" }}
                                    size="large"
                                    containerStyle={styles.avatar}
                                />
                                <Text style={styles.name}>{ride.name}</Text>
                            </View>
                            <View style={styles.details}>
                                <Text>From: <Text style={styles.location}>{ride.from}</Text></Text>
                                <Text>To: <Text style={styles.location}>{ride.to}</Text></Text>
                                <View style={styles.separator} />
                                <View style={styles.card_footer}>
                                    <Text style={styles.date}>{ride.date}</Text>
                                    <Text style={styles.money}> ${ride.price}</Text>
                                </View>
                                <View style={styles.card_footer_2}>
                                    <Text style={styles.date}>Payment Method</Text>
                                    <Text style={styles.money}> $100</Text>
                                </View>
                                <View style={styles.card_footer_3}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={{ textAlign: 'center' }}>
                                            Decline
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ backgroundColor: "#2AADAD" }, styles.button]} onPress={()=>{setModalVisible(true)}}>
                                        <Text style={{ color: "#FFF", textAlign: 'center' }}>
                                            Accept
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    ))}
                </ScrollView>
            </View>
        </View>
    )
}