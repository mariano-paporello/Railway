export interface User{
    _id:string
    gmail:string
    password:string
    age:string
    username:string
    phoneNumber:string
    image:string
}
export type ProductToView = ({
    title: any;
    price: number;
    thumbnail: any;
    amount: number;
} | undefined)[] | undefined

export interface singlePorduct{
        title: any;
        price: number;
        thumbnail: any;
        amount: number;
}
export interface NewMessage{
    id: string
    author:{
        nombre: string
        apellido: string
        edad: number
        alias: string
        avatar: string
        },
    text: string
}