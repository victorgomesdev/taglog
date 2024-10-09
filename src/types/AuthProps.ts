import User from "./User"

type AuthProps = {
    isLogged: boolean,
    setLogged: any,
    login: (email: string, password: string)=> Promise<void>,
    token?: string,
    user?: User,
    error?: string
}

export default AuthProps