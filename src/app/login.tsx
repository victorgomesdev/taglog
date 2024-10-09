import { KeyboardAvoidingView, StyleSheet, View, Image } from 'react-native'
import { useContext, useState } from 'react'
import { AuthContext } from './_layout'
import { TextInput, Button } from 'react-native-paper'
import { router } from 'expo-router'

export default function LoginScreen() {

    //TODO criar uma função de login que chama a hook se houver dados, redireciona e salva no contexto

    const [isSecured, setsecure] = useState(false)
    const { login, error } = useContext(AuthContext)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState(false)

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
                    style={style.inputs}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    label={"Senha"}
                    mode='outlined'
                    secureTextEntry={!isSecured}
                    style={style.inputs}
                    right={(<TextInput.Icon icon={isSecured ? "eye" : "eye-off"} onPress={() => setsecure(!isSecured)} />)}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <View style={style.buttonContainer}>
                <Button mode='outlined' onPress={() => { }}>
                    CRIAR CONTA
                </Button>
                <Button mode='contained'
                    loading={loading}
                    onPress={async () => {
                        await login(email, password)
                        if(error == undefined) router.replace('/(app)')
                    }}>
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
        gap: 15
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