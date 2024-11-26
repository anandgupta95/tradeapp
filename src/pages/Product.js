import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './Product.css'; // Import the CSS file

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a description of Product 1. It provides exceptional quality and value.',
    image: 'img/p1.jpg', // Adjust the path accordingly
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    link: '#product1',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is a description of Product 2. It offers advanced features and durability.',
    image: 'img/p2.jpg', // Adjust the path accordingly
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    link: '#product2',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is a description of Product 3. It is known for its reliability .',
    image: 'img/p3.jpg', // Adjust the path accordingly
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    link: '#product3',
  },
];

const Products = () => {
  return (
    <section className="products">
      <h2 className="products-title">Our Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <motion.div 
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href={product.link} className="product-link">Learn More</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
