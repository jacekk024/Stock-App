import React,{ useState } from "react";
import { Switch,View,Text } from "react-native";
import styles from "../Styles/StylesOptions";

const Options = ({navigation}) =>
{
    const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);



    return(
        <View style = {styles.cardStyle}>
            <Text style = {styles.itemStyle}>Options</Text>
            <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
            />
        </View>
    );
}

export default Options;