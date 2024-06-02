import React from 'react';
import Header from './Header'; // Ensure the path is correct based on your file structure
import "../public/aboutus.css";

const AboutUs = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="content-container">
        <div className="aboutus-container">
          <h1>Welcome to Neelima Jewellery</h1>
          <p>
            Welcome to Neelima Jewellery, where we bring you an exquisite collection of fine jewelry. We specialize in a variety of jewelry items including gold rings, earrings, necklaces, bangles, bracelets, silver items, and platinum rings. Our mission is to provide our customers with high-quality, beautifully crafted jewelry that they will cherish for years to come.
          </p>
          
          <div className="quote-section">
            <h2>"Elegance in Every Piece"</h2>
          </div>

          <div className="quality-section">
            <h2>Quality You Can Trust</h2>
            <p>
              At Neelima Jewellery, we pride ourselves on the exceptional quality of our ornaments. Each piece is meticulously crafted with the finest materials and undergoes rigorous quality checks to ensure it meets our high standards. Our commitment to quality ensures that you receive jewelry that is not only beautiful but also durable and lasting.
            </p>
            <p>
              Our skilled artisans use traditional techniques combined with modern technology to create jewelry that stands out for its elegance and craftsmanship. Whether you are looking for a timeless piece or something more contemporary, we have something for everyone.
            </p>
          </div>

          <div className="jewellery-section">
            <h2>Our Collection</h2>

            <div className="jewellery-category">
              <h3>Gold Rings</h3>
              <p>Explore our stunning range of gold rings that add elegance to any occasion. Perfect for engagements, weddings, or simply as a beautiful accessory to any outfit.</p>
            </div>

            <div className="jewellery-category">
              <h3>Gold Earrings</h3>
              <p>Discover our beautiful gold earrings, crafted to perfection. From simple studs to elaborate designs, our earrings are designed to make a statement.</p>
            </div>

            <div className="jewellery-category">
              <h3>Necklaces</h3>
              <p>Find the perfect necklace to complement your style. Our collection includes delicate chains, statement pieces, and everything in between.</p>
            </div>

            <div className="jewellery-category">
              <h3>Bangles</h3>
              <p>Our collection of bangles are designed to make you stand out. Whether you prefer traditional designs or modern styles, we have something to suit your taste.</p>
            </div>

            <div className="jewellery-category">
              <h3>Bracelets</h3>
              <p>Choose from a variety of bracelets that are perfect for any wrist. Our bracelets are available in gold, silver, and platinum, and are designed to be worn alone or stacked.</p>
            </div>

            <div className="jewellery-category">
              <h3>Silver Items</h3>
              <p>Our silver items are crafted with precision and care. From everyday wear to special occasions, our silver jewelry is designed to add a touch of elegance to any look.</p>
            </div>

            <div className="jewellery-category">
              <h3>Platinum Rings</h3>
              <p>Experience the luxury of our platinum rings collection. Known for their durability and timeless beauty, our platinum rings are perfect for those who appreciate the finer things in life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
