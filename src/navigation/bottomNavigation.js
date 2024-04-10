import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../screens/MainScreens/Profile';
import BookTrip from '../screens/MainScreens/BookTrip';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Searching" component={BookTrip} options={{ headerShown: false }} />

            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;