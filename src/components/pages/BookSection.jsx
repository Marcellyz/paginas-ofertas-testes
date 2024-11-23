import "../css/BookSection.css"; 
import BookDetails from "../BookDetails.jsx";
import CustomerReviews from "../CustomerReviews.jsx";
import ProductReview from "../ProductReview.jsx";

const BookSection = () => {
  return (
    <div className="book-section">
      <ProductReview/>
      <BookDetails />
      <CustomerReviews /> 
    </div>
  );
};

export default BookSection;
