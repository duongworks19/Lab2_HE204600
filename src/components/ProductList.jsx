import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import products from '../data/product';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart }) {
    return (
        <section className="product-section">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} className="text-center">
                        <h2 className="product-section-title">Our Products</h2>
                        <p className="product-section-sub">
                            Explore our latest curated collection of premium fashion
                        </p>
                        <div className="title-underline mx-auto" />
                    </Col>
                </Row>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {products.map((product) => (
                        <Col key={product.id}>
                            <ProductCard
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default ProductList;
