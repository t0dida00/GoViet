import firestore from '@react-native-firebase/firestore';

const TRIP = 'trips'
export const updateTrip = (userID,tripID) =>{
        firestore()
            .collection(TRIP)
            .doc(tripID) 
            .update({ 'passengers': firestore.FieldValue.arrayUnion(userID)  })
            .then(() => console.log("Document successfully updated!")).
            catch((error) => console.error("Error updating document: ", error));
   
}