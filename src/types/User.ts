type User = {
    id: string,
    name: string,
    email: string,
    account:{
        type: 'D' | 'E',
        state?: 'D' | 'O'
    }
}

export default User