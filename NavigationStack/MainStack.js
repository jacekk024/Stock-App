import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeComponent from '../Views/HomeComponent';
import CurrencyCalculator from "../Views/CurrencyCalculator"
import DrawerNavigator from "../Views/DrawerNavigator"
import Currency from "../Views/Currency"

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (       
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Drawer" component={DrawerNavigator}/>
            <Stack.Screen name="Currency List" component={HomeComponent} />
            <Stack.Screen name="Trade" component={CurrencyCalculator} />
            <Stack.Screen name="Currency" component={Currency}/>
        </Stack.Navigator>
    );
}

const MainStack = () => {

    return(
        <StackNavigator/>
    );
}

export default MainStack;