import { makeAutoObservable, runInAction } from "mobx"
import { IProduct, ICreateProduct } from "../types/products.interface";
import { getMyProducts } from "../api/auth";
import { createProducts, getAllProducts, getOneProduct } from "../api/products";


class ProductStore {

    myProducts: IProduct[] | Array<null> = []
    isLoading = false
    isLoadingAddProduct = false
    error: unknown | null = null
    products: IProduct[] | Array<null> | undefined = []
    product: IProduct | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async fetchMyproducts(tgId: number) {
        try {
            this.isLoading = true
            const books = await getMyProducts(tgId)
            if(books) {
                this.myProducts = books
                runInAction(() => {
                    this.isLoading = false
                })
            }
        } catch (error) {
            this.error = error
            runInAction(() => {
                this.isLoading = false
            })
        }
    }

    async fetchAllProducts() {
        try {
            const products = await getAllProducts()
            this.products = products
        } catch (error) {
            
        }
    }

    async createProduct(data: ICreateProduct, tgID: number, setLoading: any) {
        try {
            setLoading(true)
            const res = await createProducts(data, tgID)
            if(res?.status === 200) {
                setLoading(false)
            }
        } catch (error) {
            
        }
    }

    async fetchOneProduct(id: string) {
        try {
            this.isLoading = true
            const product = await getOneProduct(id)
            if(product) this.product = product
        } catch (error) {
            
        }
    }
}

export default new ProductStore()
