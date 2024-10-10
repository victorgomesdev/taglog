import { View, StyleSheet, Text } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from '../_layout'
import { router } from 'expo-router'
import AuthProps from '@/src/types/AuthProps'
import Header from '@/src/components/Header'
import { Button } from 'react-native-paper'
import Card from '@/src/components/Card'

export default function HomeScreen() {

    const { isLogged, setLogged, user, token }: AuthProps = useContext(AuthContext)

    return (
        <View style={style.screen}>
            <Header leftText={user?.name}
                rightButton={{ buttonColor: 'green', buttonText: 'INICIAR', buttonMode: 'contained', disabled: false }}
                leftIcon/>
            <Card
                address={{
                    city: 'paj',
                    district: 'caicaras',
                    num: 800,
                    state: '',
                    street: 'major gote'
                }}
                code='gdgdfg'
                id='hgsvbjvaauv'
                state='E' />
            <Button onPress={() => {
                setLogged(!isLogged)
                router.replace('/login')
            }}>
                sair
            </Button>

            <Text>{token}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
})