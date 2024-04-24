import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        flexDirection: 'column'
    },
    logo: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60
    },
    image: {
        width: '100%', // 70% of screen width
        height: '100%', // Let height adjust automatically to maintain aspect ratio
        aspectRatio: 1, // Maintain aspect ratio of the image
        resizeMode: 'cover', // Adjust resizeMode as per your requirement

    },
    booking_container: {
        flex: 0.7,
        marginBottom: 50
    },
    booking_box: {
        // marginHorizontal:20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -20,
        backgroundColor: '#FFF',
        borderRadius: 16,
        borderColor: '#000',
        borderWidth: 1,
        alignContent: 'center',
        padding: 20,
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
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: '600'
    },
    place_selection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }, input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    submit_button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    date_selection: {
        flex: 1,
        gap: 10,
    },
    date_text: {
        fontWeight: '600'
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButton: {
        color: 'blue',
        marginTop: 10,
    },
});
export default styles;