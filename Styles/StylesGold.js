import { StyleSheet } from "react-native";



const styles =StyleSheet.create({

    cardStyle:{
        flex: 1,
        flexDirection:"column",
        backgroundColor: '#121212',
        paddingVertical: 40,
    },

    itemViewStyle:{ 
        padding: 20,
        justifyContent: 'space-around',
        flexDirection: 'row'

    },
    itemTitleStyle:{
        fontSize:50,
        color: "gold",

    },
    itemTextStyle:{
        fontSize:30,
        color: "white",

    }
});

export default styles;
