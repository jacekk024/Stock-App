import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    itemWrapperStyle: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderColor: "#8b0000",
      },
    item: {
        flex:2,
      },
    background: {
        headerMode: 'screen',
        cardStyle: { backgroundColor: '#deb887' },
      },
    


});

export default styles;
