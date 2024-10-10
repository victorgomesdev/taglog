import { KeyboardAvoidingView, StyleSheet, View, Image, Alert, Text } from 'react-native'
import { useContext, useState } from 'react'
import { AuthContext } from './_layout'
import { TextInput, Button } from 'react-native-paper'
import { router } from 'expo-router'
import getLogin from '../services/auth'

const ERRORS = {
    INVALID_EMAIL: '',
    
}

export default function LoginScreen() {

    const { setLogged, setToken, setUser, isLogged } = useContext(AuthContext)

    const [disabled, setDisabled] = useState(false)
    const [isSecured, setSecure] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isValidEmail, setValid] = useState(true)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const validateEmailInput = (email: string) => {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            setValid(false)
            return
        }

        setValid(true)
    }

    async function login(email: string, password: string) {
        try {
            const response = await getLogin(email, password)
            if (!response.error) {
                setToken(response.token)
                setLogged(!isLogged)
                setUser(response.user)

                setTimeout(() => {
                    router.replace('/(app)')
                }, 5);
            } else {
                Alert.alert('Erro', response.message)
            }
        } catch (error) {
            Alert.alert('Oops!', 'Verifique sua conxão com a internet.')
        } finally {
            setLoading(false)
        }
    }


    return (
        <KeyboardAvoidingView
            style={style.screen}
        >
            <Image
                source={require('../assets/logo-taglog.png')}
                style={style.image}
                resizeMode='contain' />
            <View style={style.inputContainer} >
                <TextInput
                    label={"Email"}
                    mode='outlined'
                    style={[style.inputs, { borderColor: 'red' }]}
                    error={!isValidEmail}
                    onChangeText={(text) => {
                        validateEmailInput(text)
                        setEmail(text)
                    }}

                />
                <Text
                    style={{
                        position: 'absolute',
                        top: 59,
                        fontSize: 12,
                        left: 10,
                        color: 'red',
                        display: isValidEmail ? 'none' : 'flex'
                    }}
                >Email inválido</Text>

                <TextInput
                    label={"Senha"}
                    mode='outlined'
                    secureTextEntry={!isSecured}
                    style={style.inputs}
                    right={(<TextInput.Icon icon={isSecured ? "eye" : "eye-off"} onPress={() => setSecure(!isSecured)} />)}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <View style={style.buttonContainer}>
                <Button mode='outlined' onPress={() => { }} role='button'>
                    CRIAR CONTA
                </Button>
                <Button
                    mode='contained'
                    loading={loading}
                    disabled={disabled}
                    onPress={async () => {
                        if (isValidEmail) {
                            setLoading(true)
                            setDisabled(true)
                            await login(email, password)
                        }
                    }}
                >
                    ENTRAR
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 45
    },
    inputs: {
        width: '100%'
    },
    inputContainer: {
        width: '90%',
        gap: 19
    },
    buttons: {
        width: '25%',
    },
    buttonContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: '30%',
        height: '20%'
    }
})