export type Product = {
    id: string,
    code: string,
    description?: string,
    state: 'P' | 'F' | 'E' | 'D',
    address: {
        street: string,
        num: number,
        district: string,
        city: string,
        state: string,
        info?: string
    }
}