export type Product = {
    id: string,
    code: string,
    description?: string,
    state: '',
    address: {
        street: number,
        num: number,
        district: string,
        city: string,
        state: string,
        info?: string
    }
}