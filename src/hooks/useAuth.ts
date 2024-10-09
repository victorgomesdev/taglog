import { useState } from "react"
import AuthProps from "../types/AuthProps"
import getLogin from "../services/auth"
import User from "../types/User"

export default function useAuth(): AuthProps {

    const [isLogged, setLogged] = useState(false)
    const [token, setToken] = useState<string | undefined>(undefined)
    const [errorMessage, setError] = useState<string | undefined>(undefined)
    const [user, setUser] = useState<User | undefined>(undefined)

    const login = async (email: string, password: string) => {

        console.log('oi')
        const loginData = await getLogin(email, password)

        if (loginData.error != undefined) {
            //setToken(loginData.token)
            //setUser(loginData.user)
            setLogged(true)
        } else {

            setError(loginData.message)
        }


    }

    return {
        isLogged: isLogged,
        setLogged: setLogged,
        token: token,
        error: errorMessage,
        login: login,
        user: user
    }
}