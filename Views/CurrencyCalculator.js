import React from 'react';
import {Text,View,TextInput,ActivityIndicator} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useState,useEffect } from "react";
import styles from "../Styles/StylesCurrencyCalculator";
import { getCurrencyFromNBP} from '../Services/Requests';
import CountryFlag from "react-native-country-flag";

const CurrencyCalculator = ({navigation}) => {

    const [selectedValueFirst, setSelectedValueFisrt] = useState("");
    const [priceOfSelectedValueFirst,setPriceOfSelectedValueFirst] = useState(1);
    const [selectedValueSecond, setSelectedValueSecond] = useState("");                 // 
    const [priceOfSelectedValueSecond,setPriceOfSelectedValueSecond] = useState(1);     // price of second currency 
    const [infoCurrencyFirst,setInfoCurrencyFirst] = useState({});      // info about first currency {"code": "EUR", "currency": "euro", "mid": 4.6862}
    const [infoCurrencySecond,setInfoCurrencySecond] = useState({});    // info about second currency {"code": "EUR", "currency": "euro", "mid": 4.6862}
    const [amount, onChangeAmount] = useState(0);                       // amount of currencies set by user
    const [isLoading, setIsLoading] = useState(false);                  // waiting for fetch data from NBP API 
    const [data, setData] = useState({});                               // hook for fetch data

    const fetchCoinInfo = async () => {
        setIsLoading(true)
        const coinInfo = await getCurrencyFromNBP();
        setData(coinInfo);
        setIsLoading(false);
    };
 
    useEffect(() => {
        fetchCoinInfo();
    }, []);

    const firstSelector = (itemValue) => 
    {
        setSelectedValueFisrt(itemValue);
        const found = data.find(code => code.code === itemValue);
        setPriceOfSelectedValueFirst(found.mid);
        setInfoCurrencyFirst(found);
    };

    const secondSelector = (itemValue) => 
    {
        setSelectedValueSecond(itemValue);
        const found = data.find(code => code.code === itemValue);
        setPriceOfSelectedValueSecond(found.mid);
        setInfoCurrencySecond(found);
    };

    const calculateExchangePrice = (amount) =>
    {
        return(
            Number(amount * (priceOfSelectedValueFirst/priceOfSelectedValueSecond)).toFixed(2)
        );
    };

    return(
    <View style={styles.backgroundCurrencyCalculatorStyle}>

    <View >
            <TextInput
                style={styles.textInputStyle}
                selectionColor={'black'}
                value={amount}
                keyboardType="numeric"
                maxLength = {9}
                onChangeText={v => onChangeAmount(Number(v))}>
            </TextInput>
    </View>

    <View style = {styles.previewContainer}>
        {(isLoading || !data.length) ? (
        <ActivityIndicator />
        ) : (
            
            <Picker 
                selectedValue={selectedValueFirst}
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) => firstSelector(itemValue)}> 
                {data.map((currency) => (
                    <Picker.Item key={currency.code} label={currency.currency} value={currency.code} />
                ))}

            </Picker>

            )}
            <CountryFlag  isoCode={selectedValueFirst.charAt(0)+selectedValueFirst.charAt(1)} size={55} />
      
    </View>

    <View style= {styles.previewContainer}>
        {(isLoading || !data.length) ? (
        <ActivityIndicator />
        ) : (      
            <Picker
                selectedValue={selectedValueSecond}
                style={styles.pickerStyle}
                onValueChange={(itemValue) => secondSelector(itemValue)}>
                {data.map((currency) => (
                    <Picker.Item key={currency.code} label={currency.currency} value={currency.code} />
                ))
                }
            </Picker>
            )}
            <CountryFlag isoCode={selectedValueSecond.charAt(0)+selectedValueSecond.charAt(1)} size={55} />
    </View>                

    <View style = {styles.previewContainer}>
            <Text style ={styles.textStyle}>{calculateExchangePrice(amount)}</Text>
    </View>            

</View>
);
};

export default CurrencyCalculator;