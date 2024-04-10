import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container2: {
        flex: 1,
        backgroundColor: "#fff"
    },
    logo: {
        flex: 1,
        // paddingTop: windowHeight * 0.2,
        alignItems: 'center',


    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 50
    },

    text: {
        fontSize: 28,
        textAlign: 'center',
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 40,
        fontWeight: '600'
    },
    image: {
        width: 'auto', // 70% of screen width
        height: 'auto', // Let height adjust automatically to maintain aspect ratio
        aspectRatio: 1, // Maintain aspect ratio of the image
        resizeMode: 'cover', // Adjust resizeMode as per your requirement
    },

    buttons: {
        marginHorizontal: 30,
        rowGap: 20,
    },
    signUpContainer: {
        borderRadius: 60,
        overflow: "hidden",

    },
    signUpButton: {
        backgroundColor: '#00bfff',
        borderRadius: 60,
        overflow: "hidden",
    },
    signUpText: {
        textAlign: 'center',
        fontSize: 15,
        padding: 8,
        color: '#FFF',
        fontWeight: '600'
    },
    logInContainer: {
        borderRadius: 60,
        overflow: "hidden",

    },
    logInButton: {
        // backgroundColor: '#00bfff',
        borderRadius: 60,
        overflow: "hidden",
    },
    logInText: {
        textAlign: 'center',
        fontSize: 15,
        padding: 8,
        color: '#00bfff',
        fontWeight: '600'
    }
})

export default styles;