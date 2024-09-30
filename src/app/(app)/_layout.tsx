import { useContext } from 'react'
import { AuthContext } from '../_layout'
import { router, Stack } from 'expo-router'

export default function Layout() {

    //TODO fazer uma verificação melhor com a hook
    const { isLogged, setLogged }: any = useContext(AuthContext)

    // if(!isLogged){
    //     router.replace('/login')
    // }
    return (
        <Stack>
            <Stack.Screen name='index' />
        </Stack>
    )

}