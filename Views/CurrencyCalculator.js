import React from 'react';
import {Text,View,TextInput} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useState,useEffect } from "react";
import styles from "../Styles/StylesCurrencyCalculator";



const CurrencyCalculator = ({navigation}) => {

    const [selectedValueFirst, setSelectedValueFisrt] = useState("PLN");
    const [selectedValueSecond, setSelectedValueSecond] = useState("USD");
    const [amount, onChangeAmount] = useState(10);
    const [data, setData] = useState({}); // hook stanu z poczatkowo wartoscia 0, x is readonly 

    // const fetchCoinInfo = async () => {
    //     const coinInfo = await getCurrencyFromNBP();
    //     setData(coinInfo);
    // };
    
    // useEffect(() => {
    //     fetchCoinInfo();
    // }, []);

    return(
    <View style = {styles.cardStyle}> 
        <CurrencyCalculatorView
            selectedValueFirst = {selectedValueFirst}
            selectedValueSecond = {selectedValueSecond}
            setSelectedValueFisrt = {setSelectedValueFisrt}
            setSelectedValueSecond = {setSelectedValueSecond}
            onChangeAmount = {onChangeAmount}
            amount = {amount}
            data = {data}
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
    data,
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
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) => setSelectedValueFisrt(itemValue)}> 
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="PLN" value="PL" />
            </Picker>
        </View>
        <View>    
            <Picker
                selectedValue={selectedValueSecond}
                style={styles.pickerStyle}
                onValueChange={(itemValue) => setSelectedValueSecond(itemValue)}>
                <Picker.Item label= "USD"  value="USD" />
                <Picker.Item label= "PLN" value="PL" /> 
            </Picker>
        </View>  
    </View>
</View>
);


export default CurrencyCalculator;