import { useEffect } from "react";
import products from "../../stores/products";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/Products/ProductCard";
import { IProduct } from "../../types/products.interface";
import { observer } from "mobx-react-lite";

const Products = observer(() => {
    useEffect(() => {
        products.fetchAllProducts();
    }, []);


    if (products.isLoading) return <Loading />;

    // Фильтруем продукты, чтобы исключить null
    const validProducts = products.products?.filter((product): product is IProduct => product !== null) || [];
    if (validProducts.length > 0) {
        return (
            <div className="products">
                {validProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    }

});

export default Products;