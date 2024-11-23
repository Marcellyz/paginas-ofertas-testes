import React, { useState } from "react";
import "../components/css/ProductReview.css";

const ProductReview = () => {
  const [coverType, setCoverType] = useState("Capa dura");
  const [bookType, setBookType] = useState("Físico");

  return (
    <div className="product-review">
      <div className="product-image">
        <img
          src="../src/assets/capa_livros/harry_potter.jpg"
          alt="Harry Potter e a Câmara Secreta - J. K. Rowling"
        />
      </div>

      <div className="product-details">
        <h1>Harry Potter e a Câmara Secreta - J. K. Rowling</h1>
        <div className="price-discount">
          <span className="discount">10% de desconto no pix</span>
          <span className="price">R$ 40,00</span>
          <small>10% de desconto no pix ou em até 5x de R$ 11,68</small>
        </div>

        <div className="product-options">
          <div>
            <label>Tipo de Capa</label>
            <select
              value={coverType}
              onChange={(e) => setCoverType(e.target.value)}
            >
              <option>Capa dura</option>
              <option>Capa flexível</option>
            </select>
          </div>
          <div>
            <label>Tipo de livro</label>
            <select
              value={bookType}
              onChange={(e) => setBookType(e.target.value)}
            >
              <option>Físico</option>
              <option>Digital</option>
            </select>
          </div>
        </div>

        <div className="product-actions">
          <button className="buy-now">Comprar Agora</button>
          <button className="add-to-cart">Adicionar ao carrinho</button>
        </div>

        <div className="product-synopsis">
          <h3>Sinopse</h3>
          <p>
          Em Harry Potter e a Pedra Filosofal, o jovem Harry descobre que é um bruxo e inicia sua jornada na Escola de Magia e Bruxaria de Hogwarts. Entre amizades, mistérios e aventuras, ele enfrenta forças sombrias para proteger a lendária Pedra Filosofal. Um clássico repleto de magia, coragem e amizade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;