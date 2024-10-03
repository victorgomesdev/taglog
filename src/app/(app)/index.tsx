import { View, Text, Button, StyleSheet } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from '../_layout'
import { router } from 'expo-router'
import AuthProps from '@/src/types/AuthProps'
import Header from '@/src/components/Header'

export default function HomeScreen() {

    const { isLogged, setLogged }: AuthProps = useContext(AuthContext)

    return (
        <View style={style.screen}>
            <Header left={"VICTOR"}/>
            <Text>Home screen</Text>
            <Text>{isLogged? "t": "f"}</Text>
            <Button
                title='logout'
                onPress={() => {
                    setLogged(!isLogged)
                    router.replace({
                        pathname: '/login',
                    })
                }} />
        </View>
    )
}

const style = StyleSheet.create({
    screen:{
        flex: 1
    }
})