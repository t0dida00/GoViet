import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './RideListStyle.js';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { trip } from '../../../redux/selectors/authSelectors.js';
import { Ride } from './Ride.js';
import { setSelectedTrip } from '../../../redux/actions/tripAction.js';

const data = [{
  id: "123",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "124",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "125",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "163",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "173",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "1243",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "1223",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "1234",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "1231",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "12323",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "124333",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "11223",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "12433",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "123223",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
}, {
  id: "1243333",
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



const RideList = ({ navigation }) => {
  const tripList = useSelector((state) => state.trip);
  const {trips} = tripList
  const dispatch=useDispatch()
  
  return (
    <FlatList
      data={trips}
      renderItem={({ item }) => <Ride item={item} navigation={navigation}/>}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

export default RideList;
