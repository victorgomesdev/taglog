import { View, Text, Button } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from '../_layout'
import { router } from 'expo-router'

export default function HomeScreen() {

    const { logged, setLogged }: any = useContext(AuthContext)

    return (
        <View>
            <Text>Home screen</Text>
            <Text>{logged? "t": "f"}</Text>
            <Button
                title='logout'
                onPress={() => {
                    router.replace('/login')
                    setLogged(!logged)
                }} />
        </View>
    )
}