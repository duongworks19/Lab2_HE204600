import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaEnvelope, FaGithub, FaLinkedin, FaIdCard } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="site-footer">
            {/* Top footer bar using Navbar as a branded strip */}
            <Navbar className="footer-top-bar" expand={false}>
                <Container>
                    <Navbar.Brand className="footer-brand">
                        <FaShoppingCart className="me-2" />
                        CLOTHING E-COMMERCE
                    </Navbar.Brand>
                    <Badge bg="danger" className="footer-brand-badge">
                        Student Project
                    </Badge>
                </Container>
            </Navbar>

            {/* Main footer content */}
            <Container className="footer-main">
                <Row className="gy-4 align-items-start">

                    {/* About column */}
                    <Col xs={12} md={4}>
                        <h6 className="footer-col-title">About This Project</h6>
                        <p className="footer-text">
                            A clothing e-commerce demo built with React, React-Bootstrap
                            and React Icons as part of a university lab assignment.
                        </p>
                        <div className="footer-socials">
                            <Button
                                variant="outline-light"
                                size="sm"
                                className="footer-social-btn"
                                href="mailto:huongduongworks@gmail.com"
                            >
                                <FaEnvelope />
                            </Button>
                            <Button
                                variant="outline-light"
                                size="sm"
                                className="footer-social-btn"
                                href="#"
                            >
                                <FaGithub />
                            </Button>
                            <Button
                                variant="outline-light"
                                size="sm"
                                className="footer-social-btn"
                                href="#"
                            >
                                <FaLinkedin />
                            </Button>
                        </div>
                    </Col>

                    {/* Quick links column */}
                    <Col xs={12} md={4}>
                        <h6 className="footer-col-title">Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#men">Men</a></li>
                            <li><a href="#women">Women</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Student info column */}
                    <Col xs={12} md={4}>
                        <h6 className="footer-col-title">
                            <FaIdCard className="me-2" />
                            Student Information
                        </h6>
                        <ul className="footer-info-list">
                            <li>
                                <span className="info-label">Name</span>
                                <span className="info-value">DuongNNH</span>
                            </li>
                            <li>
                                <span className="info-label">Student ID</span>
                                <Badge bg="danger" className="info-badge">HE204600</Badge>
                            </li>
                            <li>
                                <span className="info-label">Class</span>
                                <Badge bg="secondary" className="info-badge">SE2004-NJ</Badge>
                            </li>
                            <li>
                                <span className="info-label">Email</span>
                                <a
                                    href="mailto:huongduongworks@gmail.com"
                                    className="info-email"
                                >
                                    huongduongworks@gmail.com
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} className="text-center text-md-start">
                            <span>© 2025 Clothing E-Commerce — DuongNNH · HE204600</span>
                        </Col>
                        <Col xs={12} md={6} className="text-center text-md-end mt-2 mt-md-0">
                            <span className="footer-cart-note">
                                <FaShoppingCart className="me-1" />
                                Built with React &amp; React-Bootstrap
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;
