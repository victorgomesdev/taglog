import { useContext } from 'react'
import { AuthContext } from '../_layout'
import { Redirect, router, Stack } from 'expo-router'
import AuthProps from '@/src/types/AuthProps'

export default function Layout() {

    //TODO fazer uma verificação melhor com a hook
    const { isLogged, setLogged }: AuthProps = useContext(AuthContext)

    if(!isLogged){
        return (<Redirect href={"/login"}/>)
    }
    
    return (
        <Stack>
            <Stack.Screen name='index' />
        </Stack>
    )

}