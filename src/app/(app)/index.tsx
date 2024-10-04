import { View, Text, StyleSheet } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from '../_layout'
import { router } from 'expo-router'
import AuthProps from '@/src/types/AuthProps'
import Header from '@/src/components/Header'
import { Button } from 'react-native-paper'
import Card from '@/src/components/Card'

export default function HomeScreen() {

    const { isLogged, setLogged }: AuthProps = useContext(AuthContext)


    return (
        <View style={style.screen}>
            <Header LeftText='Olá'
            RightButton={{ButtonColor: 'green', ButtonText: 'INICIAR', ButtonMode: 'contained'}}
            LeftIcon/>
            <Text>Home screen</Text>
            <Text>{isLogged? "t": "f"}</Text>

            <Card/>
           <Button onPress={() => {
            
            setLogged(!isLogged)
            router.replace('/login')}
            }>
            sair
           </Button>
        </View>
    )
}

const style = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center'
    }
})