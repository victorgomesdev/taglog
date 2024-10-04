import { View, StyleSheet, Text } from "react-native";
import { theme } from "../constants/Theme";


export default function Card(){

    return(
        <View style={style.card}>
            <Text>Ola</Text>
            <Text>Ola</Text>
            <Text>Ola</Text>
            <Text>Ola</Text>
            <Text>Ola</Text>
        </View>
    )
}

const style = StyleSheet.create({
    card:{
        width: '90%',
        backgroundColor: theme.colors.elevation.level5,
        borderRadius: 15
    }
})