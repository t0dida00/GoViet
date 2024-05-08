import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar } from 'react-native-elements';
import { getNameByCoordinates } from '../../helper/GetLocationName.js';
import styles from './RideListStyle.js';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTrip } from '../../../redux/actions/tripAction';

export const Ride = ({ item, navigation,selectedTrip }) => {
  const { id, avatar, from, to, start, price, driverID, driver } = item;
  const [locationName, setLocationName] = useState(null);
  const [destination, setDestination] = useState(null);
  
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
  }, [from]); // Trigger the effect when 'from' changes
  const TripSelection = () => {
    
    navigation.navigate("TripDetail", { item })
  }

  return (
    <View style={{ marginHorizontal: 20, marginBottom: 15 }}>
      <TouchableOpacity style={styles.card} onPress={TripSelection}>
        <View>
          <Text>ID: {id}</Text>
        </View>
        <View style={styles.header}>
          <Avatar
            rounded
            source={{ uri: avatar ? avatar : "https://i.pravatar.cc/150" }} // Use avatar if available, otherwise use a default image
            size="large"
            containerStyle={styles.avatar}
          />
          <Text style={styles.name}>{driver.name}</Text>
        </View>
        <View style={styles.details}>

          <Text>From: <Text style={styles.location}>{locationName}</Text></Text>
          <Text>To: <Text style={styles.location}>{destination}</Text></Text>

          <View style={styles.separator} />
          <View style={styles.card_footer}>
            <Text style={styles.date}>{new Date(start).toLocaleString('en-US')}</Text>
            <Text style={styles.money}> ${price}</Text>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  );
};