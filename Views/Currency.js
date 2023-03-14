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

  <View >

    <View style = {styles.previewContainer}>
      <Text style = {styles.textStyle}>{currency}</Text>
    </View>

    <View>
            <TextInput
                style={styles.textInputStyle}
                selectionColor={'black'}
                value={amount}
                keyboardType="numeric"
                onChangeText={v => onChangeAmount(Number(v * mid))}>
            </TextInput>
    </View>
    
    <View style = {styles.previewContainer}>
            <Text style ={styles.textStyle}>{Number(amount).toFixed(2)} {code}</Text>
    </View>

    {/* <CreateChart
    code = {code}
    mid = {mid}
    currency = {currency}  
    >
    </CreateChart> */}

  </View>
);

export default Currency;