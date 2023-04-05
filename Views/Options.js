import React,{ useState } from "react";
import { Switch,View,Text } from "react-native";
import styles from "../Styles/StylesOptions";
import { TouchableOpacity } from "react-native-gesture-handler";

const Options = ({navigation}) =>
{
    const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style = {styles.cardStyle}>
            <View style={styles.viewItemStyle}>
                <Text style = {{flex: 1,color: 'white',fontSize: 25}}>Theme</Text>

                <Switch
                    trackColor={{false: '#ffffff', true: '#000000'}}
                    thumbColor={isEnabled ? '#ffffff' : '#000000'}
                    ios_backgroundColor="#f5f5f5"
                    style = {{flex: 2}}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.viewItemStyle}>
                <TouchableOpacity>
                    <Text style = {{flex: 1,color: 'white',fontSize: 25}}>Info</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Options;