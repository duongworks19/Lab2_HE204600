import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Navbars({ cartCount = 0 }) {
    return (
        <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#2d2d2d' }}>
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-4">CLOTHING E-COMMERCE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="me-3">Home</Nav.Link>
                        <Nav.Link href="#products" className="me-3">Products</Nav.Link>
                        <Nav.Link href="#men" className="me-3">Men</Nav.Link>
                        <Nav.Link href="#women" className="me-3">Women</Nav.Link>
                        <Nav.Link href="#contact" className="me-3">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex ms-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            size="sm"
                        />
                        <Button variant="danger" size="sm">
                            <i className="bi bi-cart me-1"></i>
                            Cart ({cartCount})
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;