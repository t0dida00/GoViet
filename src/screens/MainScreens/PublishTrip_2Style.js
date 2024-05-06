import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent:'center',
       alignContent:'center',
       flexDirection: 'column'
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
        justifyContent:'space-between'
      },
      money:{
        fontWeight:"600",
        fontSize:18
      }
    ,
    date_selection: {
       
        gap: 10,
        alignContent:'center',
     
    },
    date_text: {
        fontWeight: '600'
    },
    wapper:{
        
        flex:0.6,
        margin: 20,
        padding: 30,
        justifyContent:'center',
        alignContent:'center',
        
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    input_2: {
      width: '30%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      
  },
    dropdownPicker:{
        width:'10%',
       
    },
    person_selection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },   button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },   buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }, submit_button: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
      width:'80%',
      alignSelf:'center'
  },
  buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      
  },
});
export default styles;