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


export const uploadProductImage = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file); // Append the file to the FormData

        // Assuming api is an instance of axios or similar, use post instead of get
        const res = await api.post('/uploads/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
            },
        });

        console.log('Upload successful:', res.data); // Handle the response as needed
        return res
    } catch (error) {
        console.error('Upload failed:', error); // Handle the error
    }
};