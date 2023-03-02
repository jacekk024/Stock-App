import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeComponent from '../Views/HomeComponent';
import MyScreen from "../Views/MyScreen"
import DrawerNavigator from "../Views/DrawerNavigator"
const Stack = createNativeStackNavigator();


function StackNavigator() {
    return (       
        <Stack.Navigator>
            <Stack.Screen name="Drawer" component={DrawerNavigator}/>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="MyScreen" component={MyScreen} />
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