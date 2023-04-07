import {Text,View,TextInput,Dimensions,ActivityIndicator} from "react-native";
import styles from "../Styles/StylesCurrency";
import { useState,useEffect } from "react";
import { LineChart } from "react-native-wagmi-charts";
import {getCurrencyFromNBPDate} from "../Services/Requests"
import {CalculateTime} from "../Services/CalculateTime"
import { GestureHandlerRootView  } from "react-native-gesture-handler";

const Currency = ({route,navigation}) => {

    const {code, mid, currency} = route.params;
    const [amount, onChangeAmount] = useState(0);

    const [chartDataGlobal,setchartDataGlobal] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const screenWidth = Dimensions.get("window").width;

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
      <View style={styles.cardStyle}>

      <View style = {styles.previewContainer}>
        <Text style = {styles.textStyle}>{currency}</Text>
      </View>
      <View style = {styles.previewContainer}>
        <Text style = {styles.textStyle}>PLN/{code}: {mid}</Text>
      </View>
  
      <View>
        <TextInput
          style={styles.textInputStyle}
          selectionColor={'black'}
          cursorColor = {'black'}
          value={amount}
          keyboardType={'numeric'}
          maxLength = {9}
          onChangeText={v => onChangeAmount(Number(v / mid))}>
        </TextInput>
      </View>
      
      <View style = {styles.previewContainer}>
        <Text style ={styles.textStyle} on>{Number(amount).toFixed(2)} {code}</Text>
      </View> 
      
      <View style ={{paddingHorizontal:10,paddingVertical:20}}>
        <GestureHandlerRootView >
        { (isLoading || !chartDataGlobal.length) ? (
        <ActivityIndicator />
          ) : (
        <LineChart.Provider
          data={chartDataGlobal}>
          <LineChart >
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
        )}
        </GestureHandlerRootView>   
      </View>
    </View>
    )
};

export default Currency;