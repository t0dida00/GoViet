import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, View, Text, Alert, Dimensions, ScrollView, FlatList, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component
import { useSelector, useDispatch } from 'react-redux';
import { setFromLocation, setToLocation } from '../../../redux/actions/publishAction';
import { coordinatesWithinRadius } from '../../helper/CoordinateWithinRadius';

const GOOGLE_PLACES_API_KEY = "AIzaSyDUCs8ufGs484Ue8hIdWJKglOqklpGdNGo";

const PublishTrip = ({navigation}) => {
    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const dispatch = useDispatch()
    const [routeCoordinates, setRouteCoordinates] = useState([]);
    const mapRef = useRef(null);
    const googlePlacesRef = useRef(null);
    const googlePlacesRef_2 = useRef(null);
    const state = useSelector(state => state.publish);
    const coordinates_2 = [{ latitude: 10.833131, longitude: 106.621095 }, 
        { latitude: 10.8339583, longitude: 106.6133601 },
        { latitude: 10.774350, longitude: 106.621580},/* Add more coordinates */];

    // Function to calculate distance between two coordinates using Haversine formula
    
    // Function to filter coordinates within a given radius
    
    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });

            setLoading(false); // Set loading to false once position is obtained
        });
    }, []);
    useEffect(() => {
        if (from && to && position) {
            const coordinates = [from, to];
            mapRef.current.fitToCoordinates(coordinates, {
                edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
                animated: true,
            });
            // const coordinatesWithin5km = coordinatesWithinRadius(from, coordinates_2);
            // console.log('coordinatesWithin5km: ',coordinatesWithin5km);

        }
    }, [from, to, position]);
    const handlePlaceSelect = (data, details, method) => {
        // Extract latitude and longitude from details
        const { lat, lng } = details.geometry.location;
        // Do something with latitude and longitude
        if (method == 'From') {
            setFrom({ latitude: lat, longitude: lng })
        }
        if (method == 'To') {
            setTo({ latitude: lat, longitude: lng })
        }
    };
    const handleOkPress = () => {
        if (from && to || 1) {
            // const coordinates = await fetchRouteCoordinates(fromLocation, toLocation);
            dispatch(setToLocation(to));
            dispatch(setFromLocation(from));
            navigation.navigate("PublishTrip2")
            // Perform any action after pressing "Ok"
        } else {
            alert("Please select both locations.");
        }
    };
    const clearSearchFrom = () => {
        // Clear the search input
        if (googlePlacesRef.current) {
            setFrom(null)
            googlePlacesRef.current.setAddressText('');
        }

    };
    const clearSearchTo = () => {
        // Clear the search input
        if (googlePlacesRef_2.current) {
            setTo(null)
            googlePlacesRef_2.current.setAddressText('');
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={styles.map}
                initialRegion={position}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                ref={mapRef}
            >

                {from && <Marker coordinate={from} />}
                {to && <Marker coordinate={to} />}
            </MapView>
            <View style={styles.searchContainer}>
                <FlatList
                    data={[{ key: 'GooglePlacesAutocomplete' }]}
                    keyboardShouldPersistTaps="handled"
                    renderItem={() => (
                        <GooglePlacesAutocomplete
                            placeholder='From'
                            onPress={(data, details = null) => handlePlaceSelect(data, details, method = "From")}
                            query={{
                                key: GOOGLE_PLACES_API_KEY,
                                language: 'en',
                            }}
                            ref={googlePlacesRef}
                            fetchDetails={true}
                            styles={{
                                textInputContainer: {
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderTopWidth: 0,
                                    borderBottomWidth: 0,
                                },
                                textInput: {
                                    marginLeft: 0,
                                    marginRight: 0,
                                    height: 38,
                                    color: '#5d5d5d',
                                    fontSize: 16,
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb',
                                },
                            }}
                            renderRightButton={() => (
                                <Icon name="times" size={20} color="#999" onPress={clearSearchFrom} />
                            )}
                        />
                    )}
                />
                <FlatList
                    data={[{ key: 'GooglePlacesAutocomplete' }]}
                    keyboardShouldPersistTaps="handled"

                    renderItem={() => (
                        <GooglePlacesAutocomplete
                            ref={googlePlacesRef_2}
                                
                            placeholder='To'
                            onPress={(data, details = null) => handlePlaceSelect(data, details, method = "To")}
                            query={{
                                key: GOOGLE_PLACES_API_KEY,
                                language: 'en',
                            }}
                            fetchDetails={true}
                            styles={{
                                textInputContainer: {
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderTopWidth: 0,
                                    borderBottomWidth: 0,
                                },
                                textInput: {
                                    marginLeft: 0,
                                    marginRight: 0,
                                    height: 38,
                                    color: '#5d5d5d',
                                    fontSize: 16,
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb',
                                },
                            }}
                            renderRightButton={() => (
                                <Icon name="times" size={20} color="#999" onPress={clearSearchTo} />
                            )}
                        />
                    )}
                />
            </View>

            <Button title="Ok" onPress={handleOkPress} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    searchContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,

    },
    searchbar: {

        textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            width: Dimensions.get('window').width - 20,
        },
        textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
        },
        predefinedPlacesDescription: {
            color: '#1faadb',
        },
    },
});
export default PublishTrip;
