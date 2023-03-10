import { Text,View,Dimensions} from "react-native";
import { LineChart } from "react-native-chart-kit";
import SwitchSelector from "react-native-switch-selector";
import { useState,useEffect} from "react";
import {getCurrencyFromNBPDate} from "../Services/Requests"

import styles from "../Styles/Styles";
import chart from "../Views/Chart";

const Currency = ({route,navigation}) => {

    const switchChartOptions = (value) => {
      if(value == "Month")
        console.log("dupa 1")    
      if(value == "3 Months")
        console.log("dupa 2")     
    };

    const switchoptions = [
      { label: "Month", value: "Month" },
      { label: "3 Months", value: "3 Months" }
    ]; 

    const {code, mid, currency} = route.params;

    return(
        <View >
          <Text style>{currency}</Text>
          <SwitchSelector
            options={switchoptions}
            initial={0}
            onPress={(value) => switchChartOptions(value)}/>
        </View>
    );
};
export default Currency;