import { useEffect } from "react";
import products from "../../stores/products";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/Products/ProductCard";
import { observer } from "mobx-react-lite";

const Products = observer(() => {
    useEffect(() => {
        products.fetchAllProducts();
    }, []);


    if (products.isLoading) return <Loading />;
    if (Array.isArray(products.products) ) {
        return (
            <div className="products items">
                {products.products.length > 0 ? (
                    (products.products.map(product => (
                        product && <ProductCard key={product.id} product={product} />
                    )))
                ): (
                    <h2>Здесь пока ничего нет :(</h2>
                )}
            </div>
        );
    }

});

export default Products;