import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from 'react-icons/fa';

function Navbars({ cartCount = 0 }) {
    return (
        <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#2d2d2d' }}>
            <Container>
                <Row className="w-100 align-items-center" style={{ '--bs-gutter-x': 0 }}>
                    <Col xs="auto">
                        <Navbar.Brand href="#home" className="fw-bold fs-4">
                            CLOTHING E-COMMERCE
                        </Navbar.Brand>
                    </Col>

                    <Col>
                        <Navbar.Toggle aria-controls="main-navbar" />
                        <Navbar.Collapse id="main-navbar">
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link href="#home" className="me-2">Home</Nav.Link>
                                <Nav.Link href="#products" className="me-2">Products</Nav.Link>
                                <Nav.Link href="#men" className="me-2">Men</Nav.Link>
                                <Nav.Link href="#women" className="me-2">Women</Nav.Link>
                                <Nav.Link href="#contact" className="me-3">Contact</Nav.Link>

                                <Form className="d-flex me-2">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        size="sm"
                                    />
                                </Form>

                                <Button variant="danger" size="sm" className="d-flex align-items-center gap-1 position-relative">
                                    <FaShoppingCart />
                                    <span className="ms-1">Cart</span>
                                    <Badge
                                        bg="light"
                                        text="dark"
                                        pill
                                        className="ms-1"
                                    >
                                        {cartCount}
                                    </Badge>
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Navbars;