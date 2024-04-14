import firestore from '@react-native-firebase/firestore';
export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    payload: user,
});


export const updateUserInfo = (userData, navigation) => {
    return async (dispatch) => {
        try {
            // // You can perform actions with the user's input here
            firestore()
                .collection('users')
                .doc(userData.id) // Assuming userData contains the user's ID
                .set(userData)
                .then(() => {
                    navigation.navigate("MainScreen", { screen: "Profile" });
                    dispatch(updateUser(userData)); // Dispatch action after user update
                })
                .catch(error => {
                    console.error('Error updating user: ', error);
                });
        } catch (error) {
            console.error('Error updating user: ', error);
        }
    };
};
