import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Icon } from "react-native-paper";

type HeaderProps = {
    left: any,
    right?: React.FC
}

export default function Header({ left, right }: HeaderProps) {

    return (
        <View style={style.header}>
            <>
                <MaterialIcons name="person" size={25} color={style.headerText.color}/>
            </>
            <Text style={style.headerText}>OLÁ {left}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: '7%',
        backgroundColor: "#0023db",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 15,
        marginLeft: 5
    }
})