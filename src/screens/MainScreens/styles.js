import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'column',
        columnGap: 10,
        width: '100%',
        marginBottom: 20,
    },
    inputContainer_1: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        justifyContent: 'space-between',
    },
    input_1: {
        height: 40,
        width: '48%',

        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginRight: 0, // Adding margin to create the gap

    },
    input: {
        height: 40,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    code_button: {
        backgroundColor: '#00bfff',
        borderRadius: 10, // Adjust the value to change the roundness of the corners
        paddingVertical: 10,
        paddingHorizontal: 20,



    },
    text_5: { color: "#FFF", fontSize: 18, },
    container_1: {
        flex: 1,

    },
});


export default styles;