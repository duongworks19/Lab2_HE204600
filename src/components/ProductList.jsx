import products from '../data/product';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart }) {
    return (
        <section className="product-section">
            <div className="product-section-header">
                <h2 className="product-section-title">Our Products</h2>
                <p className="product-section-sub">
                    Explore our latest curated collection of premium fashion
                </p>
                <div className="title-underline" />
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
