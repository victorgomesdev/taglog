import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Button } from "react-native-paper";

type HeaderProps = {
    LeftText: string,
    LeftIcon?: boolean,
    RightButton?: {
        ButtonText: string,
        ButtonMode: 'text' | 'outlined' | 'contained',
        ButtonColor: string,
    }
}

export default function Header({ LeftText, LeftIcon, RightButton }: HeaderProps) {

    return (
        <View
            style={[style.header, { justifyContent: RightButton === undefined ? 'flex-start' : 'space-around' }]}>
            <View style={[style.headerTextContainer, { marginLeft: RightButton === undefined ? 33 : 0 }]}>
                {LeftIcon && (
                    <MaterialIcons name={'person'} size={15} color={style.headerText.color} />
                )}
                <Text style={style.headerText}>OLÁ {LeftText}</Text>
            </View>

            {RightButton && (
                <Button
                    
                    mode={RightButton.ButtonMode}
                    buttonColor={RightButton.ButtonColor}
                    onPress={() => { }}
                >
                    {RightButton.ButtonText}
                </Button>
            )}
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
        alignItems: 'center',
        gap: 80
    },
    headerText: {
        color: 'white',
        fontSize: 15,
        marginLeft: 5
    },
    headerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button:{
        
    }
})