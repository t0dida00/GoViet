import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './TripDetailStyle.js'
import { Avatar } from 'react-native-elements';
const data = [{
    id: "123",
    avatar: "",
    from: "12 District, HCMC",
    to: "Cu Chi",
    date: "2022-04-24 15:04",
    price: "10",
    name: "Khoa",
    email:"ddkhoa97@gmail.com",
    phone:"+358401997250"
  }]
export default function TripDetail() {
    const { id, avatar, from, to, date, price, name,email,phone } = data[0];

  return (
    <View style={{flex:1,backgroundColor:"#FFF"}}>
    <ScrollView style={styles.container}>
        <View style={styles.card_container}>
            <Text style={styles.title}>
                Route Details
            </Text>
            <View style={styles.card}>
          
          <Text>From: <Text style={styles.location}>{from}</Text></Text>
            <Text>To: <Text style={styles.location}>{to}</Text></Text>
            
            <View style={styles.separator} />
            <View style={styles.card_footer}>
            <Text style={styles.date}>{date}</Text>
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
           
            <Text>Branch: <Text style={styles.location}>{to}</Text></Text>
            <Text>Number plate: <Text style={styles.location}>{to}</Text></Text>
            <Text>Color: <Text style={styles.location}>{to}</Text></Text>
     
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
                        <Text style={styles.location}>{name}</Text>
                        <Text style={styles.location}>{email}</Text>
                        <Text style={styles.location}>{phone}</Text>

                        </View>
            </View>
           
     
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.card_footer}>
          <Text style={styles.date}>Total price (1 passenger): </Text>
          <Text style={styles.money}> ${price}</Text>
          </View>
          <TouchableOpacity style={styles.submit_button} >
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
    </ScrollView>
    </View>
  )
}