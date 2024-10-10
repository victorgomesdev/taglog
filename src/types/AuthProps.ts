import User from "./User"

type AuthProps = {
    isLogged: boolean,  
    token?: string,
    user?: User,
    error?: string,
    setUser?: any,
    setToken?: any,
    setError?: any,
    setLogged?: any
}

export default AuthProps