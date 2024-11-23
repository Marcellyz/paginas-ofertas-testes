import "../css/BookSection.css"; 

import BookDetails from "../BookDetails.jsx";
import CustomerReviews from "../CustomerReviews.jsx";

const BookSection = () => {
  return (
    <div className="book-section">
      <BookDetails />
      <CustomerReviews /> 
    </div>
  );
};

export default BookSection;
