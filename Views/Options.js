import React,{ useState } from "react";
import { Switch,View,Text } from "react-native";
import styles from "../Styles/StylesOptions";

const Options = ({navigation}) =>
{
    const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);



    return(
        <View style = {styles.cardStyle}>
            <View style={styles.viewItemStyle}>
                <Text style = {styles.itemStyle}>Options</Text>
            </View>
            <View style={styles.viewItemStyle}>
                <Switch
                    style = {styles.itemStyle}
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
}

export default Options;