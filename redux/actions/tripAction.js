import firestore from '@react-native-firebase/firestore';
export const setSelectedTrip = (data) => ({
    type: 'SET_SELECTED_TRIP',
    
});


//   export const selectedTrip =  (trip) => {
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
           
//            selectedTripTem.push({vehicle: vehicleData })
//         }  else {
//             console.log('Vehicle not found');
//             // Handle case where vehicle is not found
//         }
//         // dispatch(setSelectedTrip(selectedTripTem))

//     } catch (error) {
//         console.error('Error fetching vehicle details:', error);
//         // Handle error fetching vehicle details
//     }
//     }
// }

