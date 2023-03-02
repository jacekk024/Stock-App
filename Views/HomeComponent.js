import {Button, Text,View,FlatList,StyleSheet} from "react-native";

import { useState,useEffect } from "react";


const HomeComponent = ({route,navigation}) => {

    const [x,setX] = useState(0); // hook stanu z poczatkowo wartoscia 0, x is readonly 
    const [data, setData] = useState({});
    

    const getCurrencyFromNBP = async () =>{

        try{
            const response = await 
            //fetch('http://api.nbp.pl/api/cenyzlota/?format=json'); 
            fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json'); 
            if(response.status == 200){
                const json = await response.json();
                setData(json[0].rates);
            }
        }
        catch(error){
            console.error(error);
        }
    };

    useEffect(() => {
        getCurrencyFromNBP();
      }, []);

    const styles = StyleSheet.create({
        itemWrapperStyle: {
            flexDirection: "row",
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderColor: "#ddd",
          }
    });

    const renderItem = ({item}) => {
        return(
            <View style = {styles.itemWrapperStyle}>
                <Text> {item.code} {item.currency} {item.mid}</Text>
            </View>
        );
    };

    return(
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor = {item => item.code}
        />
    );
};


export default HomeComponent;