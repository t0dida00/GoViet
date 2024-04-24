import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        gap:20
    },
    card_container:{
       flexDirection:'column',
       gap:10,
      marginBottom:20
    },
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        gap:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Shadow properties for Android
        elevation: 5,
      
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 20
      },
      avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      details: {
        // Styles for card details
      },
      location:{
        fontWeight:"600",
        fontSize:18
      },
      date:{
        fontWeight:"600",
        fontSize:18
      },
      separator:{
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginVertical: 10, // Adjust the vertical margin as needed
      },
      card_footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
      },
      money:{
        fontWeight:"600",
        fontSize:18
      },
      title:{
        fontWeight:'600',
        fontSize:18
      },  
      image: {
        width: 200, // 70% of screen width
        height: 200, // Let height adjust automatically to maintain aspect ratio
        // aspectRatio: 1, // Maintain aspect ratio of the image
        // resizeMode: 'cover', // Adjust resizeMode as per your requirement
        
    },
    car_image:{
        justifyContent:'center',
        alignItems:'center',
    },
    driver_card:{
        flexDirection:'row',
        alignItems:"flex-start"
    },
    separator:{
        borderBottomWidth: 1,
        borderBottomColor: '#000',
      },
       submit_button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
export default styles;