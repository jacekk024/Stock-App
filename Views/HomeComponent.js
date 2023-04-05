import { Text,View,FlatList, TouchableOpacity } from "react-native";
import { useState,useEffect } from "react";
import {getCurrencyFromNBP} from "../Services/Requests"
import CountryFlag from "react-native-country-flag";
import styles from "../Styles/StylesHome";
import { StatusBar } from "expo-status-bar";

const HomeComponent = ({navigation}) => {

    const [data, setData] = useState({}); // hook stanu z poczatkowo wartoscia 0, x is readonly 

    const fetchCoinInfo = async () => {
        const coinInfo = await getCurrencyFromNBP();
        setData(coinInfo);
    };
    
    useEffect(() => {
        fetchCoinInfo();
    }, []);

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity
                onPress={()=> {
                    navigation.navigate('Currency',{code:item.code,mid:item.mid,currency:item.currency}) // gdzie wysylamy i jakie properties
                }}>
                <View style = {styles.itemWrapperStyle}>
                    <Text style={styles.textCourrecyStyle}> {item.code}  {item.mid}</Text>
                    <Text style ={styles.itemStyle}></Text>
                    <CountryFlag isoCode={item.code.charAt(0)+item.code.charAt(1)} size={25} />
                </View>
            </TouchableOpacity>
        );
    };
    
    return(
    <View style={styles.cardStyle}>
        <StatusBar style="light"></StatusBar>
        <FlatList
            data={data}
            keyExtractor = {item => item.code}
            renderItem={renderItem} 
        />
    </View>
    );
};

export default HomeComponent;