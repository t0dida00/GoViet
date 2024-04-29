import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    text_1: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 15
    },
    text_2: {
        fontSize: 18,
        color: "#9555FF"
    },
    text_3: {
        fontSize: 16,
    },
    text_4: {
        fontSize: 28,
        fontWeight: '600'
    },
    text_5: { color: "#FFF", fontSize: 18, },
    text_6: {
    
        marginTop: 10,
        marginBottom: 20
    },
    box: {
        width: 254,
        height: 210,
        padding: 20,
        borderWidth: 2,
        borderColor: '#9555FF',
        borderRadius: 16,
        marginTop: 50,
        fontSize: 18
    },
    flex_box: {
        marginTop: 20,
        paddingHorizontal: 10, // Add horizontal padding to the container
        rowGap: 15,
        flexDirection: 'column',
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
    },
    input_field: {
        height: 50,
        width: '50%',
        borderColor: '#000',
        borderBottomWidth: 1,
        marginTop: 50
        // paddingHorizontal: ,
        // borderRadius: 5,
    },
    input_field_2: {
        height: 50,
        width: '85%',
        borderColor: '#000',
        borderBottomWidth: 1,
        fontSize: 24
    },
    dropdown: {
        height: 50,
        width: "35%",
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 15,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    phone_box: {
        width: '80%',
        flexDirection: 'row',
        alignItems: "flex-end",
        columnGap: 20
    },
    code_button: {
        backgroundColor: '#00bfff',
        borderRadius: 10, // Adjust the value to change the roundness of the corners
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 30,
        alignSelf: 'flex-end',
        marginRight: '17%'
    },
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 46,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        marginHorizontal: 5
    },
    focusCell: {
        borderColor: '#000',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF88'
    },
    blurOverlay: {
        backgroundColor: 'yellow', // Semi-transparent color for the blur effect
        position: 'absolute',
        height: '100%',
        width: '100%'

    }, modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
      },
      modalContent: {
        backgroundColor: '#fff', // White background
        padding: 20,
        borderRadius: 10,
        width: '80%', // 80% of the screen width
        alignItems: 'center',
      },
      modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
      },
})

export default styles;