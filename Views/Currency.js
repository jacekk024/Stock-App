import {Text,View,TextInput} from "react-native";
import styles from "../Styles/StylesCurrency";
import CreateChart from "../Views/Chart";

import { useState } from "react";


const Currency = ({route,navigation}) => {

    const {code, mid, currency} = route.params;
    const [amount, onChangeAmount] = useState(0);

    return(
        <CurrencyView 
          currency = {currency}
          mid = {mid}
          code = {code}
          amount = {amount}
          onChangeAmount = {onChangeAmount}
        >
        
        </CurrencyView>
    );
};

const CurrencyView = ({
  currency,
  mid,
  code,
  amount,
  onChangeAmount,
}) => (

  <View style={styles.cardStyle}>

    <View style = {styles.previewContainer}>
      <Text style = {styles.textStyle}>{currency}</Text>
    </View>

    <View>
      <TextInput
        style={styles.textInputStyle}
        selectionColor={'black'}
        cursorColor = {'black'}
        value={amount}
        keyboardType={'numeric'}
        maxLength = {11}
        onChangeText={v => onChangeAmount(Number(v * mid))}>
      </TextInput>
    </View>
    
    <View style = {styles.previewContainer}>
      <Text style ={styles.textStyle} on>{Number(amount).toFixed(2)} {code}</Text>
    </View>
    
    <View style = {styles.previewContainer}>
      <CreateChart
        code = {code}
        mid = {mid}
        currency = {currency}>
      </CreateChart>
    </View>

  </View>
);

export default Currency;