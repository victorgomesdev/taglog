import { useState } from "react"
import AuthProps from "../types/AuthProps"

//TODO Implementar as funções de login() e logout() para poderem ser retornadas na hook

export default function useAuth(): AuthProps {

    const [isLogged, setLogged] = useState(false)
    
    return {
        isLogged: isLogged,
        setLogged: setLogged,
    }
}