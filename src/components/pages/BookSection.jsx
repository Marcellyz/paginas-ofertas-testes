import "../css/BookSection.css";
import CustomerReviews from "../CustomerReviews.jsx";
import ProductReview from "../ProductReview.jsx";
import fichaTecnica from "../../data/fichaTecnica.js";
import extraData from "../../data/extraData.js";
import data from "../../data/data.js";

import { useParams } from "react-router-dom";

const BookSection = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const bookDetails = fichaTecnica.find((book) => book.id === parseInt(id, 10));
  const bookExtraData = extraData.find((extra) => extra.id === parseInt(id, 10));
  const bookData = data.find((book) => book.id === parseInt(id)); 

  // Verifica se o livro existe
  if (!bookDetails || !bookExtraData) {
    return <p>Livro não encontrado!</p>;
  }

  return (
    <div className="book-section">
      <ProductReview bookData={bookDetails} extraData={bookExtraData}  data={bookData}/>
      <CustomerReviews />
    </div>
  );
};

export default BookSection;
