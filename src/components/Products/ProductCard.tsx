import { FC } from "react"
import { IProduct } from "../../types/products.interface"
import './Products.css'
import { SiBitcoinsv } from "react-icons/si"


const ProductCard: FC<{product: IProduct}> = ({ product }) => {
    return (
        <div className="product">
            <div className="info">
                <div className="img">
                <img src={`http://localhost:8080/api/v1/uploads/image/${product.img}`} alt={product.name} />
                </div>
                <div className="name">{product.name}</div>
                <div className="description"><p>{product.info.slice(0, 100)}...</p></div> {/* Increased description length */}
            </div>
            <div className="price">
                <span>{product.price} <SiBitcoinsv color="yellow" fontSize="18px" /></span>
                <div className="feedback">Связаться</div>
            </div>
        </div>
    )
}

export default ProductCard

