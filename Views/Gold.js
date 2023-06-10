import React,{ useState,useEffect } from "react";
import { View,ActivityIndicator,Dimensions,Text } from "react-native";
import { LineChart } from "react-native-wagmi-charts";
import styles from "../Styles/StylesGold";
import {getGoldInfoFromNBPDate} from "../Services/Requests"
import {getGoldTodayInfoFromNBP} from "../Services/Requests"

const Gold = () =>{

    const [chartDataGlobal,setChartDataGlobal] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingToday, setIsLoadingToday] = useState(false);
    const [todayGoldData,setTodayGoldData] = useState([]);


    const fetchGoldInfoDate = async () =>
    {
      setChartDataGlobal([]); // czyszczenie wykresu - za kazdym razem wczytujemy nowe dane
      setIsLoading(true);

      const goldInfo = await getGoldInfoFromNBPDate();
      for (let i = 0; i < goldInfo.length; i++) 
        setChartDataGlobal(chartData => [...chartData, {timestamp: i, value:goldInfo[i].cena}]);
      setIsLoading(false);
    };

    const fetchGoldInfoToday = async () =>
    {
      setIsLoadingToday(true);
      const goldInfoToday = await getGoldTodayInfoFromNBP();
      setTodayGoldData(goldInfoToday);
      setIsLoadingToday(false);
    };

    useEffect(() => {
      fetchGoldInfoDate();
      fetchGoldInfoToday();
    },[]);

    if (isLoading || isLoadingToday || !chartDataGlobal.length) {
      return (
        <View style = {styles.cardStyle}>
          <ActivityIndicator size="large" />
        </View>
      );
    }


    return(
    <View style = {styles.cardStyle}>

    <View style = {styles.itemViewStyle}>
      <Text style = {styles.itemTitleStyle}>Gold Prices</Text>
    </View>

    <View style = {styles.itemViewStyle}>
      <Text style = {styles.itemTextStyle}>Today price: {todayGoldData[0].cena}zł/g</Text>
    </View>

    <View>
      <LineChart.Provider
       data={chartDataGlobal}>

        <LineChart>
            <LineChart.Path color={"gold"} >
                <LineChart.Gradient color={"gold"} />
            </LineChart.Path>

            <LineChart.CursorLine color={"gold"}>
            <LineChart.Tooltip textStyle={{
                borderRadius: 4,
                color: 'white',
                fontSize: 18,
                padding: 4,
            }}/>
            </LineChart.CursorLine>
        </LineChart>
      </LineChart.Provider>
    </View>

    </View>
    );

}

export default Gold;