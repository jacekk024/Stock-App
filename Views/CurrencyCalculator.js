import React from 'react';
import {Text,View,TextInput,ActivityIndicator} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useState,useEffect } from "react";
import styles from "../Styles/StylesCurrencyCalculator";
import { getCurrencyFromNBP} from '../Services/Requests';
import CountryFlag from "react-native-country-flag";



const CurrencyCalculator = ({navigation}) => {

    const [selectedValueFirst, setSelectedValueFisrt] = useState("");
    const [selectedValueSecond, setSelectedValueSecond] = useState("");
    const [amount, onChangeAmount] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState({}); // hook stanu z poczatkowo wartoscia 0, x is readonly 

    const fetchCoinInfo = async () => {
        setIsLoading(true)
        const coinInfo = await getCurrencyFromNBP();
        setData(coinInfo);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCoinInfo();
        
    }, []);


    const renderFlagsList = () => 
    {

        return(
            
        data.map((item) => {
            return <Picker.item  label={item.code.toString()} value={item.code.toString()} />;
        }));
    };

    return(
    <View style={styles.backgroundCurrencyCalculatorStyle}>

    <View >
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
        {(isLoading || !data.length) ? (
        <ActivityIndicator />
        ) : (    

            <Picker
                selectedValue={selectedValueFirst}
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) => setSelectedValueFisrt(itemValue)}> 
                {renderFlagsList()}

            </Picker>)}
        </View>
        <View>
        {(isLoading || !data.length) ? (
        <ActivityIndicator />
        ) : (        
            <Picker
                selectedValue={selectedValueSecond}
                style={styles.pickerStyle}
                onValueChange={(itemValue) => setSelectedValueSecond(itemValue)}>

                {renderFlagsList()}

            </Picker>)}
        </View>  
    </View>
</View>
);
};




export default CurrencyCalculator;