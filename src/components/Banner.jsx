import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';

const slides = [
    {
        img: slide1,
        alt: 'Summer Collection',
        badge: 'NEW ARRIVAL',
        badgeClass: '',
        title: 'Summer Collection 2025',
        desc: 'Discover the latest trends in women\'s fashion — light, vibrant & effortlessly chic.',
        btnText: 'Shop Now',
        btnClass: '',
        accent: '#e63946',
    },
    {
        img: slide2,
        alt: "Men's Premium Style",
        badge: 'PREMIUM',
        badgeClass: 'badge-premium',
        title: "Men's Modern Style",
        desc: "Elevate your wardrobe with our curated selection of premium menswear & accessories.",
        btnText: 'Explore Collection',
        btnClass: '',
        accent: '#457b9d',
    },
    {
        img: slide3,
        alt: 'Mega Sale',
        badge: 'MEGA SALE',
        badgeClass: 'badge-sale',
        title: 'Up to 50% Off',
        desc: 'Limited time deals on hundreds of styles — shoes, bags, accessories & more!',
        btnText: 'Grab the Deal',
        btnClass: 'btn-sale',
        accent: '#ff6b35',
    },
];

function PromoCarousel() {
    return (
        <div className="banner-wrapper">
            <Carousel
                indicators={true}
                controls={true}
                interval={4000}
                fade={true}
                className="promo-carousel"
            >
                {slides.map((slide, idx) => (
                    <Carousel.Item key={idx}>
                        {/* Background image fills the banner */}
                        <div
                            className="banner-slide"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                            {/* Gradient overlay */}
                            <div className="banner-overlay" />

                            {/* Content */}
                            <div className="banner-content">
                                <span className={`promo-badge ${slide.badgeClass}`}>
                                    {slide.badge}
                                </span>
                                <h1 className="banner-title">{slide.title}</h1>
                                <p className="banner-desc">{slide.desc}</p>
                                <button className={`banner-btn ${slide.btnClass}`}>
                                    {slide.btnText}
                                    <span className="btn-arrow">→</span>
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default PromoCarousel;
