export interface IProduct {
    id: string;
    name: string;
    info: string;
    price: number;
    img: string;
    userId: string;
}

export interface ICreateProduct {
    name: string;
    info: string;
    price: number;
    img: string;
}
