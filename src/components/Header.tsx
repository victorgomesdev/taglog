import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Button } from "react-native-paper";

type HeaderProps = {
    leftText: string,
    leftIcon?: boolean,
    rightButton?: {
        buttonText: string,
        buttonMode: 'text' | 'outlined' | 'contained',
        buttonColor: string,
        disabled: boolean
    }
}

export default function Header({ leftText, leftIcon, rightButton }: HeaderProps) {

    return (
        <View
            style={[style.header, { justifyContent: rightButton === undefined ? 'flex-start' : 'space-around' }]}>
            <View style={[style.headerTextContainer, { marginLeft: rightButton === undefined ? 33 : 0 }]}>
                {leftIcon && (
                    <MaterialIcons name={'person'} size={15} color={style.headerText.color} />
                )}
                <Text style={style.headerText}>OLÁ {leftText}</Text>
            </View>

            {rightButton && (
                <Button
                    mode={rightButton.buttonMode}
                    buttonColor={rightButton.buttonColor}
                    onPress={() => { }}
                    disabled={rightButton.disabled}
                >
                    {rightButton.buttonText}
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