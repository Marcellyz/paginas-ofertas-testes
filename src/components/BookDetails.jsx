import React from "react";
import "../components/css/BookDetails.css";

const BookDetails = () => {
  return (
    <div className="technical-details">
      <h2 className="title">Ficha técnica</h2>
      <ul className="details-list">
        <li>
          <strong>Título original:</strong> A metamorfose
        </li>
        <li>
          <strong>Páginas:</strong> 104
        </li>
        <li>
          <strong>Formato:</strong> 14.00 x 21.00 cm
        </li>
        <li>
          <strong>Peso:</strong> 0.16 kg
        </li>
        <li>
          <strong>Acabamento:</strong> Livro brochura
        </li>
        <li>
          <strong>Lançamento:</strong> 07/08/1997
        </li>
        <li>
          <strong>ISBN:</strong> 978-85-7164-685-8
        </li>
        <li>
          <strong>Selo:</strong> Companhia das Letras
        </li>
      </ul>
    </div>
  );
};

export default BookDetails;
