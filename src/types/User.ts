type User = {
    id: string,
    name: string,
    email: string,
    account:{
        type: '',
        state?: 'D' | 'O'
    }
}

export default User