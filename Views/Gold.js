import React,{ useState,useEffect } from "react";
import { View,ActivityIndicator,Dimensions } from "react-native";
import { LineChart } from "react-native-wagmi-charts";

import styles from "../Styles/StylesGold";
import {getGoldInfoFromNBPDate} from "../Services/Requests"

const Gold = () =>{

    const [chartDataGlobal,setChartDataGlobal] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const screenWidth = Dimensions.get("window").width;

    const fetchCoinInfoDate = async () =>
    {
        setChartDataGlobal([]); // czyszczenie wykresu - za kazdym razem wczytujemy nowe dane
      setIsLoading(true);

      const coinInfo = await getGoldInfoFromNBPDate();
      for (let i = 0; i < coinInfo.length; i++) 
        setChartDataGlobal(chartData => [...chartData, {timestamp: i, value:coinInfo[i].cena}]);
     setIsLoading(false);
    };
    useEffect(() => {
      fetchCoinInfoDate();
    },[]);


    return(
    <View style = {styles.cardStyle}>

      

    <View>
    {(isLoading || !chartDataGlobal.length) ? (
      <ActivityIndicator />
        ) : (
      <LineChart.Provider
      
       data={chartDataGlobal}>

        <LineChart>
            <LineChart.Path color={"gold"} >
                <LineChart.Gradient color={"gold"} />
            </LineChart.Path>

            <LineChart.CursorLine color={"gold"}>
            <LineChart.Tooltip />
            </LineChart.CursorLine>
        </LineChart>

      </LineChart.Provider>
    )}
    </View>
    </View>
    );

}


export default Gold;