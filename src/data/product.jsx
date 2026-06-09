import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';

const products = [
    {
        id: 1,
        image: p1,
        name: "Men's Hoodie",
        price: 450000,
        status: 'In Stock',
        category: 'Men',
        description:
            'A premium heavyweight hoodie crafted from 100% brushed cotton fleece. Features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a comfortable, relaxed fit — perfect for casual everyday wear.',
    },
    {
        id: 2,
        image: p2,
        name: "Women's Floral Dress",
        price: 620000,
        status: 'In Stock',
        category: 'Women',
        description:
            'An elegant A-line summer dress with a vibrant floral print on lightweight chiffon fabric. The flattering V-neckline and flowy silhouette make it ideal for brunch dates, garden parties, or weekend outings.',
    },
    {
        id: 3,
        image: p3,
        name: "Men's Leather Jacket",
        price: 1250000,
        status: 'In Stock',
        category: 'Men',
        description:
            'A classic biker-style jacket made from genuine full-grain leather. Finished with asymmetric zip closure, snap-collar, and quilted lining for warmth. A timeless wardrobe essential that only gets better with age.',
    },
    {
        id: 4,
        image: p4,
        name: 'Premium Sneakers',
        price: 890000,
        status: 'Out of Stock',
        category: 'Accessories',
        description:
            'Minimalist court-style sneakers constructed with a supple leather upper and cushioned EVA sole. The clean all-white silhouette pairs effortlessly with any outfit, from casual joggers to tailored trousers.',
    },
    {
        id: 5,
        image: p5,
        name: "Women's Crop T-Shirt",
        price: 280000,
        status: 'In Stock',
        category: 'Women',
        description:
            'A soft, lightweight crop tee in a delicate pastel pink. Made from organic cotton blend, this versatile piece features a relaxed cropped cut and ribbed hem — easy to style with high-waist jeans or skirts.',
    },
    {
        id: 6,
        image: p6,
        name: 'Luxury Leather Handbag',
        price: 1580000,
        status: 'In Stock',
        category: 'Accessories',
        description:
            'A structured top-handle bag crafted from genuine Italian leather with gold-tone hardware. Spacious interior with a zip compartment and card slots. The sophisticated design transitions seamlessly from office to evening.',
    },
];

export default products;
