import { useContext } from "react"
import { AuthContext } from "../app/_layout"


//TODO Fazer o mock dos dados de retorno da hook, deve retornar os dados do usuário através do service
// type User = {
//     nome: string,
//     id: string,
//     email: string,
//     tipo: string
// }
// type AuthProps = {
//     isLogged: boolean,
//     setLogged: ()=> void,
//     user: User
// }

export default function useAuth(): boolean {

    const { isLogged, setLogged }: any = useContext(AuthContext)

    setLogged(!isLogged)
    setTimeout(()=> {}, 1000)
    return isLogged
}