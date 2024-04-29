import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:20,
        alignItems:'center'
    },
    switch_button_container:{
        flex:0.2,
        flexDirection:'row',
        alignItems:"center",
    
        width:"70%",
       
        
    },
    switch_button_wrapper:{
        borderBottomWidth: 1,
        borderColor: '#000',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:10
    },
    mode:{
        borderBottomWidth: 2,
        borderColor: '#000',
    },
    card_container:{
        flexDirection:'column',
        gap:10,
       marginBottom:20,
     
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
         gap: 0
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
         fontSize:14
       },
       date:{
         fontWeight:"600",
         fontSize:14
       },
       separator:{
         borderBottomWidth: 1,
         borderBottomColor: '#000',
         marginVertical: 10, // Adjust the vertical margin as needed
       },
       card_footer:{
         flexDirection:'row',
         justifyContent:'space-between',
         marginBottom:10
       },
       card_footer_2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
      },
      card_footer_3:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10,
        gap:20
      },
       money:{
         fontWeight:"600",
         fontSize:14
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
     list_view:{
        flex:1,
        width:'100%'
     },
     button:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        width:100,
      
     },
     modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      width:'80%'
      
    },
    closeButton: {
        color: 'blue',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
    },
});
export default styles;