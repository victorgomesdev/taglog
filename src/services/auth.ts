import { API_URL } from "../constants/Api";
import User from "../types/User";

type LoginResponse = {
    token?: string,
    user?: User,
    error?: string,
    message?: string
}

export default async function getLogin(email: string, password: string) {

    const response = await fetch(API_URL + '/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    const data = await response.json()


    return data as LoginResponse
}