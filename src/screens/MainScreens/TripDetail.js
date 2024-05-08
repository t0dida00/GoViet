import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './TripDetailStyle.js'
import { Avatar } from 'react-native-elements';
import { getNameByCoordinates } from '../../helper/GetLocationName.js';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTrip } from '../../../redux/actions/tripAction.js';
import { trip, userData } from '../../../redux/selectors/authSelectors.js';


export default function TripDetail({ navigation, route }) {
  const { item } = route.params;
  const { id, avatar, from, to, start, price, driverID, driver,vehicle } = item;
  const [locationName, setLocationName] = useState(null);
  const [destination, setDestination] = useState(null);
  // console.log(selectedTrip)
  const data = useSelector(userData)
  // const trip = useSelector((state)=>state.trip)
  useEffect(() => {
   
    const fetchLocationName = async () => {
      try {
        const name = await getNameByCoordinates(from);
        setLocationName(name);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const fetchLocationName2 = async () => {
      try {
        const name = await getNameByCoordinates(to);
        setDestination(name);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLocationName();
    fetchLocationName2();
  }, []); // Trigger the effect when 'from' changes
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView style={styles.container}>
        <View style={styles.card_container}>
          <Text style={styles.title}>
            Route Details
          </Text>
          <View style={styles.card}>

            <Text>From: <Text style={styles.location}>{locationName}</Text></Text>
            <Text>To: <Text style={styles.location}>{destination}</Text></Text>
            
            <View style={styles.separator} />
            <View style={styles.card_footer}>
              <Text style={styles.date}>{new Date(start).toLocaleString('en-US')}</Text>
              <Text style={styles.money}> ${price}</Text>
            </View>

          </View>
        </View>
        <View style={styles.card_container}>
          <Text style={styles.title}>
            Car Details
          </Text>
          <View style={styles.card}>
            <View style={styles.car_image}>
              <Image
                source={require("../../assets/logo.png")} // Or use a local image: require('./path/to/image.jpg')
                style={styles.image}
              />
            </View>

            <Text>Branch: <Text style={styles.location}> {vehicle.model}</Text></Text>
            <Text>Number plate: <Text style={styles.location}>Null</Text></Text>
            <Text>Color: <Text style={styles.location}>Null</Text></Text>

          </View>
        </View>
        <View style={styles.card_container}>
          <Text style={styles.title}>
            Driver Details
          </Text>
          <View style={styles.card}>
            <View style={styles.driver_card}>
              <Avatar
                rounded
                source={{ uri: "https://i.pravatar.cc/150" }}
                size="large"
                containerStyle={styles.avatar}
              />
              <View>
                <Text style={styles.location}>{driver.name}</Text>
                <Text >{driver.email}</Text>
                <Text>{driver.phone}</Text>

              </View>
            </View>


          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.card_footer}>
          <Text style={styles.date}>Total price (1 passenger): </Text>
          <Text style={styles.money}> ${price}</Text>
        </View>
        <TouchableOpacity style={styles.submit_button} onPress={() => { navigation.navigate("Payment",{data,item}) }} >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}