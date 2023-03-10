import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeComponent from '../Views/HomeComponent';
import CurrencyCalculator from "../Views/CurrencyCalculator"
import DrawerNavigator from "../Views/DrawerNavigator"
import Currency from "../Views/Currency"

const Stack = createNativeStackNavigator();


function StackNavigator() {
    return (       
        <Stack.Navigator>
            <Stack.Screen name="Drawer" component={DrawerNavigator}/>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="CurrencyCalculator" component={CurrencyCalculator} />
            <Stack.Screen name="Currency" component={Currency}/>
        </Stack.Navigator>
    );
}


const MainStack = () => {

    return(
        <StackNavigator/>
        //Warunkowy wybor stosu
    );
}

export default MainStack;