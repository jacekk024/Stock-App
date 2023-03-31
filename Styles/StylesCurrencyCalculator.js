
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    backgroundCurrencyCalculatorStyle:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#121212',
        paddingVertical: 40,        
    },
    textStyle: {
        color: 'lightgrey',
        fontSize: 30,
        justifyContent: 'space-around',
    },
    textInputStyle: {
        backgroundColor:  'lightgrey',
        height: 50,
        margin: 20,
        borderWidth: 3,
        padding: 10,
        borderRadius: 25,
    },
    previewContainer: {
        padding:20,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },  
    cardStyle: {
        backgroundColor: '#121212',
        padding:30,
    },
    pickerStyle: {
          height: 30,
          width: 130,
          borderRadius: 30,
          backgroundColor:  'lightgrey',
    },
  });

  export default styles;
