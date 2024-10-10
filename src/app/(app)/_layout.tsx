import { useContext } from 'react'
import { AuthContext } from '../_layout'
import { Redirect, Stack } from 'expo-router'
import AuthProps from '@/src/types/AuthProps'

export default function Layout() {

    
    const { isLogged }: AuthProps = useContext(AuthContext)

    if(!isLogged){
        return (<Redirect href={"/login"}/>)
    }
    
    return (
        <Stack
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='index' />
        </Stack>
    )

}