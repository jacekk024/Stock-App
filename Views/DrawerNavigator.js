import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeComponent from '../Views/HomeComponent';
import CurrencyCalculator from "./CurrencyCalculator"

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (       
        <Drawer.Navigator
                screenOptions={{
                drawerStyle: {
                backgroundColor: 'lightgrey',
                width: 240,
                paddingVertical:40,
                }}}>

            <Drawer.Screen options={{headerShown: false}} name="Currency List" component={HomeComponent} />
            <Drawer.Screen options={{headerShown: false}} name="Currency Calculator" component={CurrencyCalculator} />
            <Drawer.Screen options={{headerShown: false}} name="Options" component={CurrencyCalculator}></Drawer.Screen>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;