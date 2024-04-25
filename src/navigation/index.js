import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreens/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import PhoneNumber from '../screens/Login/PhoneNumber';
import VerifyScreen from '../screens/Login/VerifyScreen';
import CustomerInfo from '../screens/MainScreens/CustomerInfo';
import Profile from '../screens/MainScreens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './bottomNavigation';
import RideList from '../screens/MainScreens/RideList';
import TripDetail from '../screens/MainScreens/TripDetail';
import Payment from '../screens/MainScreens/Payment';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationWrapper = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                {/* <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Phone" component={PhoneNumber} options={{ headerShown: false }} />
                <Stack.Screen name="VerifyStep" component={VerifyScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CustomerInfo" component={CustomerInfo} options={{ headerShown: false }} />
                {/* <Stack.Screen name="MainScreen" component={Profile} options={{ headerShown: false }} /> */}
                <Stack.Screen name="MainScreen" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="RideList" component={RideList}   options={{ headerTitle: "Ride List", headerTitleAlign: 'center' }} />
                <Stack.Screen name="TripDetail" component={TripDetail}   options={{ headerTitle: "Ride Detail", headerTitleAlign: 'center' }} />
                <Stack.Screen name="Payment" component={Payment}   options={{ headerTitle: "Select Payment Method", headerTitleAlign: 'center' }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationWrapper;