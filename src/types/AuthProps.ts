import User from "./User"

type AuthProps = {
    isLogged: boolean,
    setLogged: any,
    login?: ()=> Promise<any>,
    token?: string,
    user?: User,
}

export default AuthProps