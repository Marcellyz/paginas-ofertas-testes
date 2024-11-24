import data from "../data/data";
import "../components/css/Promo.css";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const repeatedData = data.concat(data, data);

const Promo = () => {
  const navigate = useNavigate();

  const handleClick = (id)=> {
    navigate(`/book/${id}`);
  }


  return (
    <div className="container-promo">
      {repeatedData.map((book, index) => (
        <div className="box-promo" key={`${book.id}-${index}`}>
          <img src={book.img} alt={book.alt}/>
          <p><a href="#">{book.title}</a></p>
          <div className="promo">
          <p>{book.promo}% off</p>
          <p className="option">{book.option}</p>
          <button onClick={()=> handleClick(book.id)}>Ver detalhes</button>
          </div>
        </div>
      ))}
    </div>
  );
};

Promo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      option: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Promo;
