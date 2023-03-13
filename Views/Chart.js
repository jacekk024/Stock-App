import { Dimensions} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useState,useEffect } from "react";

import {getCurrencyFromNBPDate} from "../Services/Requests"


const CreateChart = ({code,mid,currency}) => {

    const [myData, setData] = useState([]); // hook stanu z poczatkowo wartoscia 0, x is readonly 
    //  const {value} = route.params;
    const midArray = [];

    const fetchCoinInfoDate = async () => {

        date = CalculateTime();
        endDate = date[0];
        startDate = date[1];

        console.log(endDate);
        console.log(startDate);

        const coinInfo = await getCurrencyFromNBPDate(startDate,endDate,code);

        setData(coinInfo);
        
        for (let i = 0; i < myData.length; i++) {
          midArray.push(myData[i].mid);
        }

        console.log(midArray);
    };

    useEffect(() => {
      fetchCoinInfoDate();
    }, []);

  return(



    <LineChart
    data={{
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}

    yAxisSuffix={code}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#808080",
      backgroundGradientTo: "#808080",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
);
}

const CalculateTime = () =>{

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear(); 
  
  var ddPast = String(new Date(new Date().setDate(today.getDate() - 30)).getDay()).padStart(2, '0');
  var mmPast = String(new Date(new Date().setDate(today.getDate() - 30)).getMonth()).padStart(2, '0');
  var yyyyPast = new Date(new Date().setDate(today.getDate() - 30)).getFullYear();

  var priorDate = yyyyPast + '-' + mmPast + '-'+ ddPast;
  today = yyyy + '-' + mm + '-' + dd;

  return [today,priorDate];
};

export default CreateChart;



