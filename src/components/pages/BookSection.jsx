import React from "react";
import "../css/BookSection.css"; 
import ProductReview from "../ProductReview.jsx"; 
import BookDetails from "../BookDetails.jsx";
import CustomerReviews from "../CustomerReviews.jsx";

const BookSection = () => {
  return (
    <div className="book-section">
      <ProductReview />
      <BookDetails />
      <CustomerReviews /> 
    </div>
  );
};

export default BookSection;
