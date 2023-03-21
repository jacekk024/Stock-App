import { Dimensions} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useState,useEffect } from "react";

import {getCurrencyFromNBPDate} from "../Services/Requests"


const CreateChart = ({code,mid,currency}) => {

    const [data, setData] = useState([]); // hook stanu z poczatkowo wartoscia 0, x is readonly 
    //  const {value} = route.params;
    //const midArray = [];
    const arr = [];
    const fetchCoinInfoDate = async () => {

        var date = CalculateTime();
        var endDate = date[0];
        var startDate = date[1];
        console.log("code: "  +code);

        console.log(endDate);
        console.log(startDate);
       // const coinInfo = await getCurrencyFromNBPDate(startDate,endDate,code);
        const response = await fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${code}/${startDate}/${endDate}/?format=json`);


        const json = await response.json();
        
        console.log(json.rates[0].mid)

    



        //setData(coinInfo);
        

        // const arr = [];

        for (let i = 0; i < json.rates.length; i++) {
          arr.push(json.rates[i].mid);
        }

         console.log(arr);
  };

  useEffect(() => {
      fetchCoinInfoDate();

  }, []);

  const myData = {
    datasets: 
    [
      {
        data: [4.3998, 4.397, 4.401, 4.372, 4.3639, 4.3556, 4.3272, 4.3436, 4.3398, 4.3322, 4.3469, 4.352, 4.3242, 4.3341, 4.3265, 4.3354, 4.3252, 4.3258, 4.348, 4.3254, 4.2803, 4.2928, 4.3833, 4.4325, 4.4074, 4.4003, 4.4565, 4.4856, 4.4463, 4.4372, 4.4601, 4.4888, 4.4515, 4.4524, 4.4687, 4.4873, 4.463, 4.4697, 4.4475, 4.4094, 4.4002, 4.4341, 4.4289, 4.3981, 4.4626, 4.4356, 4.4266, 4.3906, 4.3793, 4.403, 4.4248, 4.4202]
      }
    ]
  } 

  console.log(myData)

  return(
    <ChartView
     data = {myData}
     code = {code}
    >


    </ChartView>

  );
}
 


const ChartView = ({
  data,
  code,

}) =>
(

 

  <LineChart
  data  = {data}
 
  width={Dimensions.get("window").width} // from react-native
  height={400}

  yAxisSuffix={code}
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#808080",
    backgroundGradientTo: "#808080",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 10
    },
    propsForDots: {
      r: "2",
      strokeWidth: "1",
      stroke: "gold"
    }
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>

);
const CalculateTime =  () =>{

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear(); 
  
  var ddPast =  String(new Date(new Date().setDate(today.getDate() - 30)).getDay()).padStart(2, '0');
  var mmPast = String(new Date(new Date().setDate(today.getDate() - 30)).getMonth()).padStart(2, '0');
  var yyyyPast = new Date(new Date().setDate(today.getDate() - 30)).getFullYear();

  var priorDate = yyyyPast + '-' + mmPast + '-'+ ddPast;
  today = yyyy + '-' + mm + '-' + dd;

  return [today,priorDate];
};

export default CreateChart;