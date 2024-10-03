import { KeyboardAvoidingView, StyleSheet, View, Image, Text } from 'react-native'
import { useContext, useState, useRef} from 'react'
import { AuthContext } from './_layout'
import { TextInput, Button } from 'react-native-paper'
import { router } from 'expo-router'

export default function LoginScreen() {

    //TODO criar uma função de login que chama a hook se houver dados, redireciona e salva no contexto

    const { isLogged, setLogged }: any = useContext(AuthContext)
    const [isSecured, setsecure] = useState(false)

    return (
        <KeyboardAvoidingView
            style={style.screen}
        >
            <Image
                source={require('../assets/logo-taglog.png')}
                style={style.image}
                resizeMode='contain'/>
            <View style={style.inputContainer} >
                <TextInput
                    label={"Email"}
                    mode='outlined'
                    style={style.inputs}
                />

                <TextInput
                    label={"Senha"}
                    mode='outlined'
                    secureTextEntry={!isSecured}
                    style={style.inputs}
                    right={(<TextInput.Icon icon={isSecured? "eye": "eye-off"} onPress={()=> setsecure(!isSecured)}/>)}
                />
            </View>

            <View style={style.buttonContainer}>
                <Button mode='outlined' onPress={() => { }}>
                    CRIAR CONTA
                </Button>
                <Button mode='contained' onPress={() => {
                    setLogged(!isLogged)
                    router.replace('/(app)')
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