import { createContext } from 'react'
import { Stack } from 'expo-router'
import AuthProps from '../types/AuthProps'
import useAuth from '../hooks/useAuth'
import { PaperProvider } from 'react-native-paper'
import { theme } from '../constants/Theme'

export const AuthContext = createContext<AuthProps>({
    isLogged: false
})

export default function Layout() {


    const { isLogged, setLogged } = useAuth()

    const AuthProvider = ({ children }: any) => {

        return (
            <AuthContext.Provider value={{
                isLogged: isLogged,
                setLogged: setLogged
            }}>
                {children}
            </AuthContext.Provider>)
    }
    return (

        <AuthProvider>
            <PaperProvider theme={{dark: false, colors: theme.colors}}>
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