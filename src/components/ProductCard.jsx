import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function ProductCard({ product, onAddToCart }) {
    const { image, name, price, status, description } = product;

    const isInStock = status === 'In Stock';
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        if (!isInStock || added) return;
        setAdded(true);
        onAddToCart && onAddToCart(product);
    };

    return (
        <div className="product-card">
            {/* Status badge */}
            <div className="product-status-badge">
                <Badge bg={isInStock ? 'success' : 'secondary'}>
                    {status}
                </Badge>
            </div>

            {/* Product image */}
            <div className="product-img-wrap">
                <img src={image} alt={name} className="product-img" />
                <div className="product-img-overlay">
                    <span className="quick-view">Quick View</span>
                </div>
            </div>

            {/* Info */}
            <div className="product-info">
                <h6 className="product-name">{name}</h6>
                <p className="product-desc">{description}</p>
                <p className="product-price">
                    {price.toLocaleString('vi-VN')} <span>VND</span>
                </p>

                <Button
                    variant={!isInStock ? 'secondary' : added ? 'success' : 'dark'}
                    size="sm"
                    className={`product-btn ${added ? 'product-btn--added' : ''}`}
                    disabled={!isInStock || added}
                    onClick={handleAddToCart}
                >
                    <i className={`bi ${added ? 'bi-check-circle' : 'bi-cart-plus'} me-2`}></i>
                    {!isInStock ? 'Out of Stock' : added ? 'Added to Cart!' : 'Add to Cart'}
                </Button>
            </div>
        </div>
    );
}

export default ProductCard;

