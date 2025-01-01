import React, { useState } from "react";
import "./productView.css"; // Import CSS file
import bookImage from "../assets/images/BookDetail.jpg"; // Import image from assets

const ProductDetailPage = () => {
  // Book information
  const book = {
    name: "Harry Potter and the Philosopher's Stone",
    supplier: "Thien Minh Book Joint Stock Company",
    author: "J.K.Rowling",
    coverType: "Hardcover",
    publisher: "The World Publishing House",
    rating: 4.8,
    price: "219.000 VND",
    details: {
      productCode: "9786043921526",
      supplier: "Thien Minh Book Joint Stock Company",
      authors: "J.K.Rowling",
      translator: "Nguyen Phuc Quang Ngoc",
      publisher: "The World Publishing House",
      publicationYear: "2023",
      language: "Vietnamese",
      weight: "409 g",
      dimensions: "21 x 14 x 2 cm",
      pages: 260,
      coverType: "Hardcover",
      bestSeller: "Top 100 best-selling life skills products of the month.",
    },
    description: `For over 20 centuries, the meaning of many valuable words has been lost, leading to misunderstandings or misinterpretations. 
    There are profound issues resolved within each word, hidden meanings that need to be unveiled – and when you grasp their true meaning, 
    an entirely new world opens up before you.

    In *Harry Potter*, Rhonda Byrne reveals life-changing knowledge about the power of gratitude hidden in a sacred teaching passed down over 2000 years ago. 
    Over a transformative 28-day journey, Rhonda Byrne will guide you in applying this knowledge to every moment of your life, 
    bringing complete transformation in all aspects of your life filled with joy.

    It doesn't matter who you are, where you are, or your current circumstances—*Harry Potter* will create a complete change in your life. 

    With its captivating content and inspiring visuals, *Harry Potter* is destined to conquer readers worldwide. Gooda hopes this book will bring 
    wonderful experiences to you and become a valuable addition to your bookshelf.`,
  };

  // State for quantity
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle increment and decrement
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const toggleDescription = () => setIsExpanded((prev) => !prev);

  return (
    <div className="product-detail-page">
      {/* Container 1: Main image and buttons */}
      <div className="product-image-container">
        <img src={bookImage} alt={book.name} className="main-product-image" />

        {/* Quantity Adjuster */}
        <div className="quantity-adjuster">
          <button onClick={decrementQuantity} className="quantity-btn">-</button>
          <span className="quantity-value">{quantity}</span>
          <button onClick={incrementQuantity} className="quantity-btn">+</button>
        </div>

        <div className="product-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-container">
        {/* Container 2: Specific information */}
        <div className="product-info-container">
          <h2 className="product-name">{book.name}</h2>
          <p className="product-supplier">Publisher: {book.publisher}</p>
          <p className="product-author">Author: {book.author}</p>
          <p className="product-cover">Cover Type: {book.coverType}</p>
          <p className="product-rating">
            Rating: {"⭐".repeat(Math.floor(book.rating))} ({book.rating.toFixed(1)} / 5)
          </p>
          <p className="product-price">Price: {book.price}</p>
        </div>

        {/* Container 3: Detailed information */}
        <div className="product-detail-container">
          <h3>Details</h3>
          <ul>
            <li>Product Code: {book.details.productCode}</li>
            <li>Supplier: {book.details.supplier}</li>
            <li>Authors: {book.details.authors}</li>
            <li>Translator: {book.details.translator}</li>
            <li>Publisher: {book.details.publisher}</li>
            <li>Publication Year: {book.details.publicationYear}</li>
            <li>Language: {book.details.language}</li>
            <li>Weight: {book.details.weight}</li>
            <li>Dimensions: {book.details.dimensions}</li>
            <li>Pages: {book.details.pages}</li>
            <li>Cover Type: {book.details.coverType}</li>
            <li>Bestseller: {book.details.bestSeller}</li>
          </ul>
        </div>

        {/* Container 4: Book description */}
        <div className="product-description-container">
          <h3>Product Description</h3>
          <p>aa
            {isExpanded
              ? book.description
              : `${book.description.substring(0, 300)}...`}
          </p>
          <button onClick={toggleDescription} className="read-more-less-btn">
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
