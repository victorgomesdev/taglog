import { View, Text, Button } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from './_layout'
import { router } from 'expo-router'
import useAuth from '../hooks/useAuth'

export default function LoginScreen() {

    //TODO criar uma função de login que chama a hook se houver dados, redireciona e salva no contexto
    const auth = useAuth()
    const { isLogged, setLogged }: any = useContext(AuthContext)
    return (
        <View >
            <Text style={{ color: 'blue' }}>LOGIN SCREEN</Text>
            <Text>{isLogged ? "t" : "f"}</Text>
            <Button
                title='LOGIN'
                onPress={ () => {
                    
                }} />
        </View>
    )
}