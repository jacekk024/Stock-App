import React from 'react';
import { StyleSheet,Text,View,TextInput,Button} from "react-native";

const CurrencyCalculator = ({navigation}) => {

    const [text, onChangeText] = React.useState('1');

    return(
    <View>
        <Text></Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        <Button title='onClick'
        />
    </View>
    );
};

const styles = StyleSheet.create({
    input: {

        flexDirection: "column",
        flexWrap: 'wrap',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });

export default CurrencyCalculator;