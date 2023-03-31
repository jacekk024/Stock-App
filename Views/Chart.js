import { ActivityIndicator,View} from "react-native";
import { useState,useEffect } from "react";
import { LineChart } from "react-native-wagmi-charts";

import {getCurrencyFromNBPDate} from "../Services/Requests"
import {CalculateTime} from "../Services/CalculateTime"



const CreateChart = ({code,mid,currency}) => {

    const [chartDataGlobal,setchartDataGlobal] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchCoinInfoDate = async () =>
    {
      setchartDataGlobal([]); // czyszczenie wykresu - za kazdym razem wczytujemy nowe dane
      setIsLoading(true);

      var date = CalculateTime();
      var dateEnd = date[0];
      var dateStart = date[1];

      const coinInfo = await getCurrencyFromNBPDate(dateStart,dateEnd,code);
      for (let i = 0; i < coinInfo.length; i++) 
        setchartDataGlobal(chartData => [...chartData, {timestamp: i, value:coinInfo[i].mid}]);
     setIsLoading(false);
    };
  useEffect(() => {
    fetchCoinInfoDate();
  },[]);


  return(

    <View style={{ paddingHorizontal: 10 }}>
    {(isLoading || !chartDataGlobal.length) ? (
      <ActivityIndicator />
    ) : (
      <LineChart.Provider
      
       data={chartDataGlobal}>

        <LineChart >
          <LineChart.Path color="gold" animateOnMount="foreground">
            <LineChart.Gradient color="gold" />
          </LineChart.Path>
          </LineChart>

      </LineChart.Provider>
    )}
  </View>

  );
}

export default CreateChart;