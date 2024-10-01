import { View, Text, Button } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from '../_layout'
import { router } from 'expo-router'
import AuthProps from '@/src/types/AuthProps'

export default function HomeScreen() {

    const { isLogged, setLogged }: AuthProps = useContext(AuthContext)

    return (
        <View>
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