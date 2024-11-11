import "../css/PagePromo.css";
import Promo from "../Promo";
import data from "../../data/data";

import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

const PagePromo = () => {
  return (
    <div className="container-pagePromo">
      <h2>Ofertas e Promoções</h2>
      <div className="box-promo">
        <Promo data={data} className="promo" />
      </div>
      <div className="container-btn-passador">
        <div className="previous">
          <GrFormPreviousLink />
          <p>Previous</p>
        </div>
        <ul>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">67</a>
          </li>
          <li>
            <a href="#">68</a>
          </li>
        </ul>
        <div className="next">
          <p>Next</p>
          <GrFormNextLink />
        </div>
      </div>
    </div>
  );
};

export default PagePromo;
