import { createContext, useState } from 'react'
import { Stack } from 'expo-router'
import AuthProps from '../types/AuthProps'
import { PaperProvider } from 'react-native-paper'
import { theme } from '../constants/Theme'
import User from '../types/User'

export const AuthContext = createContext<AuthProps>({
    isLogged: false
})

export default function Layout() {

    const [isLogged, setLogged] = useState(false)
    const [token, setToken] = useState<string>('')
    const [user, setUser] = useState<User>()
    const [error, setError] = useState<string>('')


    const AuthProvider = ({ children }: any) => {

        return (
            <AuthContext.Provider value={{
                isLogged, token, error, user, setError, setLogged, setToken, setUser
            }}>
                {children}
            </AuthContext.Provider>
        )
    }
    return (

        <AuthProvider>
            <PaperProvider theme={{ dark: false, colors: theme.colors }}>
                <Stack screenOptions={{
                    statusBarColor: '#0023db',
                }}>
                    <Stack.Screen
                        name='login'
                        options={{
                            headerShown: false
                        }} />
                    <Stack.Screen name='(app)' options={{ headerShown: false }} />
                    <Stack.Screen name='sign-up' />
                </Stack>
            </PaperProvider>
        </AuthProvider>
    )
}