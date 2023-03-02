import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeComponent from '../Views/HomeComponent';
import MyScreen from "../Views/MyScreen"

const Drawer = createDrawerNavigator();


function DrawerNavigator() {
    return (       
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeComponent} />
            <Drawer.Screen name="MyScreen" component={MyScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;