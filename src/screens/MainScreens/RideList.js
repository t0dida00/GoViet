import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './RideListStyle.js';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [{
  id: "123",
  avatar: "",
  from: "12 District, HCMC",
  to: "Cu Chi",
  date: "2022-04-24 15:04",
  price: "10",
  name: "Khoa"
},{
    id: "124",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "125",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "163",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "173",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "1243",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "1223",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "1234",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "1231",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "12323",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "124333",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "11223",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "12433",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "123223",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "1243333",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "124323",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa"
  },{
    id: "122343",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "15:04 2022-04-24",
    price: "10",
    name: "Khoa"
  }];


const RideList = ({navigation}) => {

    const TripSelection = () =>{
        navigation.navigate("TripDetail")
    }
  const Ride = ({ item }) => {
    const { id, avatar, from, to, date, price, name } = item;
    return (
        <View style={{marginHorizontal:20,marginBottom:15}}>

       
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
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.details}>
          
        <Text>From: <Text style={styles.location}>{from}</Text></Text>
          <Text>To: <Text style={styles.location}>{to}</Text></Text>
          
          <View style={styles.separator} />
          <View style={styles.card_footer}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.money}> ${price}</Text>
          </View>
   
        </View>
      </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={Ride}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

export default RideList;
