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
                        //Get trip List from firestore
                        dispatch(getTrips())
                        navigation.navigate("MainScreen", { screen: "Searching" });
                    } else {
                        dispatch(loginSuccess({ id: documentSnapshot.id }));
                        navigation.navigate('CustomerInfo');
                        // If user does not exist, go to CustomerInfo to enter more information
                        
                    }
                });
        } catch (error) {
            console.error('Error checking user existence: ', error);
            // Handle error, such as showing an error message to the user
        }
    };
};



export const setTrips = (trips) => ({
    type: 'SET_TRIPS',
    payload: trips,
});


// export const setSeletedTrip = (trip) => ({
//     type: 'SET_SELECTED_TRIP',
//     payload: trip,
// });

export const getTrips = () => {
    return async (dispatch) => {
        try {
            const tripsSnapshot = await firestore().collection('trips').get();
            const trips = [];

            // Use Promise.all to wait for all asynchronous operations to complete
            await Promise.all(tripsSnapshot.docs.map(async (documentSnapshot) => {
                const tripData = documentSnapshot.data();
                const driverSnapshot = await firestore().collection('users').doc(tripData.driverID).get();
                const vehicleSnapshot = await firestore().collection('vehicles').where('driverID', '==', tripData.driverID).limit(1).get();
               
                let vehicleData = null;

                if (!vehicleSnapshot.empty) {
                    vehicleData = vehicleSnapshot.docs[0].data();
                }
                const driverData = driverSnapshot.data();
                const trip = {
                    id: documentSnapshot.id,
                    ...tripData,
                    driver: driverData,
                    vehicle: vehicleData
                };
                trips.push(trip);
            }));

            dispatch({
                type: 'SET_TRIPS',
                payload: trips
            });
        } catch (error) {
            console.error('Error fetching trips: ', error);
            // Handle error, such as showing an error message to the user
        }
    };
};




// export const selectedTrip =  (trip) => {
//     return async (dispatch) => {
//     try {
//         // Log the vehicleID to verify
        
//         const selectedTripTem = [trip]
//         // Fetch vehicle details from the 'vehicles' collection based on the vehicleID
//         const vehicleQuerySnapshot =  firestore()
//         .collection('vehicles')
//         .where('driverID', '==', trip.driverID)
//         .limit(1)
//         .get()
       
//         if (!vehicleQuerySnapshot.empty) {
//             // If documents are found, loop through them
//             const vehicleData = vehicleQuerySnapshot.docs[0].data()
//            console.log(vehicleData)
//            selectedTripTem.push({vehicle: vehicleData })
//         }  else {
//             console.log('Vehicle not found');
//             // Handle case where vehicle is not found
//         }
//         dispatch(setSeletedTrip(selectedTripTem))

//     } catch (error) {
//         console.error('Error fetching vehicle details:', error);
//         // Handle error fetching vehicle details
//     }
//     }
// }

