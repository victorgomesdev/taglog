import User from "./User"

type AuthProps = {
    isLogged: boolean,
    setLogged: any,
    login?: ()=> Promise<any>,
    logout?: ()=> void
    user?: User
}

export default AuthProps