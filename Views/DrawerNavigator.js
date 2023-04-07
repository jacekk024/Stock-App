
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeComponent from '../Views/HomeComponent';
import CurrencyCalculator from "./CurrencyCalculator";
import Gold from './Gold';
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
                options={{headerShown: false,drawerIcon: () => (<Ionicons name="cash-outline" size={22} color={"black"} />),}}                   
                />
            <Drawer.Screen 
                name="Exchange" 
                component={CurrencyCalculator} 
                options={{headerShown: false,drawerIcon: () => (<Ionicons name="card-outline" size={22} color={"black"} />),}}
                />
             <Drawer.Screen 
                name="Gold Info" 
                component={Gold} 
                options={{headerShown: false,drawerIcon: () => (<Ionicons name="cube-outline" size={22} color={"black"} />),}}
                />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;