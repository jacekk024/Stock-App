
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeComponent from '../Views/HomeComponent';
import CurrencyCalculator from "./CurrencyCalculator";
import Options from './Options';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (       
        <Drawer.Navigator
                screenOptions={{
                drawerStyle: {
                backgroundColor: 'lightgrey',
                width: 240,
                paddingVertical:40,
                }}}>


            <Drawer.Screen 
                name="Currency List"
                component={HomeComponent}
                options={{headerShown: false,drawerIcon: () => (<Ionicons name="home-outline" size={22} color={"black"} />),}}                   
                />
            <Drawer.Screen 
                name="Currency Calculator" 
                component={CurrencyCalculator} 
                options={{headerShown: false,drawerIcon: () => (<Ionicons name="calculator-outline" size={22} color={"black"} />),}}
                />
            <Drawer.Screen 
                name="Options" 
                component={Options} 
                options={{headerShown: false,drawerIcon: () => (<Ionicons name="build-outline" size={22} color={"black"} />),}}
                />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;