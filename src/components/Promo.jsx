import data from "../data/data";
import "../components/css/Promo.css";

import PropTypes from "prop-types";

const repeatedData = data.concat(data, data);

const Promo = () => {
  return (
    <div className="container-promo">
      {repeatedData.map((item, index) => (
        <div className="box-promo" key={`${item.id}-${index}`}>
          <img src={item.img}/>
          <p><a href="#">{item.title}</a></p>
          <div className="promo">
          <p>{item.promo}% off</p>
          <p className="option">{item.option}</p>
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
