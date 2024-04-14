import firestore from '@react-native-firebase/firestore';

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const checkUserExistence = (uid, navigation) => {
    return async (dispatch) => {
        try {
            firestore()
                .collection('users')
                .doc(uid)
                .onSnapshot(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        const userData = { id: documentSnapshot.id, ...documentSnapshot.data() };
                        // If user exists, dispatch login success action or set some flag indicating the user is logged in
                        dispatch(loginSuccess(userData)); // Example action, you should define your action accordingly
                        navigation.navigate("MainScreen", { screen: "Searching" });
                    } else {
                        dispatch(loginSuccess({ id: documentSnapshot.id }));
                        navigation.navigate('CustomerInfo');
                        // If user does not exist, dispatch logout action or set some flag indicating the user is logged out
                        // dispatch(logout()); // Example action, you should define your action accordingly
                    }
                });
        } catch (error) {
            console.error('Error checking user existence: ', error);
            // Handle error, such as showing an error message to the user
        }
    };
};


