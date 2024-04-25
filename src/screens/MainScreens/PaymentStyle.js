import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingHorizontal:20
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
        padding: 30,
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
        width:'90%'
      },
   
       submit_button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 50,
        width:'100%ccc'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    payment_box:{
      flex:0.6,
      justifyContent:'center',
      alignItems:'center'
    },separator:{
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    selectedOption:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"center",
    },
    method:{
      paddingVertical:10
    },
    warning:{
      color:'red'
    },
    button_2:{
      flex:0.4,
      justifyContent:'center',
      alignItems:'center'
    }
});
export default styles;