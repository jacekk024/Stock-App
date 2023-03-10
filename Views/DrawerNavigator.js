import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeComponent from '../Views/HomeComponent';
import CurrencyCalculator from "./CurrencyCalculator"


const Drawer = createDrawerNavigator();


function DrawerNavigator() {
    return (       
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeComponent} />
            <Drawer.Screen name="Currency Calculator" component={CurrencyCalculator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;