import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../screens/MainScreens/Profile';
import BookTrip from '../screens/MainScreens/BookTrip';
import { Icon } from 'react-native-elements'; // Import Icon component from react-native-elements
import MyRides from '../screens/MainScreens/MyRides';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Searching" component={BookTrip} options={{
                headerShown: false,tabBarLabel: () => null, tabBarIcon: ({ focused }) => (
                    <Icon
                        name='search'
                        type='material'
                        color={focused ? 'blue' : 'gray'}
                    />
                ),
            }} />
            <Tab.Screen name="My Rides" component={MyRides} options={{
                headerTitle: "My Rides", headerTitleAlign:"center", tabBarIcon: ({ focused }) => (
                    <Icon
                        name='directions-car'
                        type='material'
                        color={focused ? 'blue' : 'gray'}
                    />
                ),
                tabBarLabel: () => null,
            }} />  
            <Tab.Screen name="Profile" component={Profile} options={{
               headerTitleAlign:"center", tabBarLabel: () => null,tabBarIcon: ({ focused }) => (
                    <Icon
                        name='person'
                        type='material'
                        color={focused ? 'blue' : 'gray'}
                    />
                ),
            }} />

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;