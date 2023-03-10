import { Dimensions} from "react-native";
import { LineChart } from "react-native-chart-kit";
import {getCurrencyFromNBPDate} from "../Services/Requests"


const createChart = ({route}) => {

    const [data, setData] = useState({}); // hook stanu z poczatkowo wartoscia 0, x is readonly 
    const {value} = route.params;



    const fetchCoinInfoDate = async () => {
        const coinInfo = await getCurrencyFromNBPDate(value);
        setData(coinInfo);
    };

    useEffect(() => {
      fetchCoinInfoDate();
    }, []);

  return(

    <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
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
    yAxisLabel="$"
    yAxisSuffix="k"
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