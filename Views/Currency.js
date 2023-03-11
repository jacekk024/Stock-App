import {Text,View} from "react-native";
import styles from "../Styles/StylesCurrency";

const Currency = ({route,navigation}) => {

    const {code, mid, currency} = route.params;

    return(
        <View style = {styles.previewContainer} >
          <Text style = {styles.textStyle}>{currency}</Text>         
        </View>
    );
};

export default Currency;