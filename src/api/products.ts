import { IProduct, ICreateProduct } from "../types/products.interface"
import api from "./axios"


export const getAllProducts = async(): Promise<IProduct[] | undefined>  => {
    try {
        const res = await api.get('/products')
        return res.data
    } catch (error) {
        // return error
    }
}

export const createProducts = async(data: ICreateProduct, tgID: number)=> {
    try {
        const res = await api.post('/products', data, {
            headers: {
                Authorization: tgID
            }
        })
        return res
    } catch (error) {
        console.error(error)
    }
}

export const getOneProduct = async(id: string) => {
    try {
        const res = await api.get<IProduct>(`/products/${id}`)
        return res.data
    } catch (error) {
    }
}