import React from 'react';
import {Text,View,TextInput} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";
import styles from "../Styles/StylesCurrencyCalculator";



const CurrencyCalculator = ({navigation}) => {

    const [selectedValueFirst, setSelectedValueFisrt] = useState("PLN");
    const [selectedValueSecond, setSelectedValueSecond] = useState("USD");
    const [amount, onChangeAmount] = useState(10);

    return(
    <View> 
        <CurrencyCalculatorView
            selectedValueFirst = {selectedValueFirst}
            selectedValueSecond = {selectedValueSecond}
            setSelectedValueFisrt = {setSelectedValueFisrt}
            setSelectedValueSecond = {setSelectedValueSecond}
            onChangeAmount = {onChangeAmount}
            amount = {amount}
        >           
        </CurrencyCalculatorView>
    </View>
    );
};

const CurrencyCalculatorView = ({
    selectedValueFirst,
    selectedValueSecond,
    setSelectedValueFisrt,
    setSelectedValueSecond,
    onChangeAmount,
    amount,
}) => (

<View>
    <View>
            <TextInput
                style={styles.textInputStyle}
                selectionColor={'black'}
                value={amount}
                keyboardType="numeric"
                onChangeText={v => onChangeAmount(Number(v))}>
            </TextInput>
    </View>
    
    <View style = {styles.previewContainer}>
            <Text style ={styles.textStyle}>{amount}</Text>
    </View>

    <View style = {styles.previewContainer}>
        <View>
            <Picker
                selectedValue={selectedValueFirst}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValueFisrt(itemValue)}> 
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="PLN" value="PL" />
            </Picker>
        </View>
        <View>    
            <Picker
                selectedValue={selectedValueSecond}
                style={{height: 50, width: 150 }}
                onValueChange={(itemValue) => setSelectedValueSecond(itemValue)}>
                <Picker.Item label= "USD"  value="USD" />
                <Picker.Item label= "PLN" value="PL" /> 
            </Picker>
        </View>  
    </View>
</View>
);


export default CurrencyCalculator;