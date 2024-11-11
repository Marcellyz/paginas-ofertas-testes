import "../components/css/TemplatePag.css";

import { MdSecurity } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { ImCreditCard } from "react-icons/im";
import { SiMastercard, SiVisa } from "react-icons/si";
import { GrAmex } from "react-icons/gr";
import { FaApplePay } from "react-icons/fa6";

const TempletePag = () => {
  return (
    <div>
      <div className="container-template">
        <div className="security">
          <MdSecurity />
          <p>Compre com segurança.</p>
          <p>Site cetificado.</p>
        </div>
        <div className="entrega">
          <CiDeliveryTruck />
          <p>Enviamos para todo Brasil.</p>
        </div>
        <div className="cartao-de-credito">
          <ImCreditCard />
          <p>Compre com segurança.</p>
        </div>
        <div className="bandeiras">
          <SiMastercard />
          <p>mastercard</p>
          <SiVisa />
          <GrAmex />
          <FaApplePay />
        </div>
      </div>
    </div>
  );
};

export default TempletePag;
