import { createContext, useState } from 'react'
import { Stack } from 'expo-router'

export const AuthContext = createContext({})

export default function Layout() {

    const [isLogged, setLogged] = useState(false)

    const AuthProvider = ({ children }: any) => {

        return (
            <AuthContext.Provider value={{ isLogged, setLogged }}>
                {children}
            </AuthContext.Provider>)
    }
    return (

        <AuthProvider>
            <Stack initialRouteName='login'>
                <Stack.Screen name='login' />
                <Stack.Screen name='(app)' options={{ headerShown: false }} />
                <Stack.Screen name='sign-up' />
            </Stack>
        </AuthProvider>
    )
}