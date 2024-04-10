import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 10,
        height: 1000,
    },
    container_1: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        backgroundColor: "#FFF",
        width: "100%",
    },
    container_2: {
        flexDirection: 'column',
        backgroundColor: "#FFF",
        width: "100%",
        alignItems: "center",
        height: 250,
        justifyContent: "space-around"
    },
    avatar: {
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        marginBottom: 5,
    },
    phoneNumber: {
        marginBottom: 5,
    },
    editButton: {
        marginRight: 0,
        justifyContent: 'center'
    },
    travel_preference: {
        width: 270,
        height: 97,
        backgroundColor: 'rgba(149, 85, 255, 0.4)',
        borderRadius: 10,
        padding: 10,
        color: '#000', // Text color
        fontSize: 16
    },
});
export default styles;