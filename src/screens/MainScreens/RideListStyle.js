import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      
        backgroundColor: "#FFF",
        flexDirection: 'column',
        alignContent:'center',
        paddingTop:50
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
    
});
export default styles;