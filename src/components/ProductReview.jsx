import { useState } from "react";
import "../components/css/ProductReview.css";
import PropTypes from "prop-types";
import harryPotter from "../assets/capa_livros/harry_potter.jpg"

const ProductReview = ({ data = {}, extraData = {} }) => {
  const [coverType, setCoverType] = useState("Capa dura");
  const [bookType, setBookType] = useState("Físico");

  return (
    <div className="product-review">
      <div className="product-image">
        <img
          src={data.img || harryPotter}
          alt={data.alt || "Harry Potter"}
        />
      </div>

      <div className="product-details">
        <h1>{data.title}</h1>
        <div className="price-discount">
          <span className="discount">{data.promo || "10"}% de desconto no pix</span>
          <span className="price">R$ {extraData.preco || "40,00"}</span>
          <small>10% de desconto no pix ou em até 5x de R$ {(extraData.preco / 5 || 1).toFixed(2)}</small>
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
            {extraData.sinopse || "Sinopse não disponível"}
          </p>
        </div>
      </div>
    </div>
  );
};

// Atualizando a validação das props
ProductReview.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    promo: PropTypes.number,
  }),
  extraData: PropTypes.shape({
    preco: PropTypes.number,
    sinopse: PropTypes.string,
  }),
};

export default ProductReview;
