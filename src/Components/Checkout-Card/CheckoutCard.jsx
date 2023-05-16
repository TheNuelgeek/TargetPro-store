import { useState } from "react";
import "./Checkout.css";
import expandicon from "./assets/expand_less.svg";
import CheckItems from "./Checkbox";

function CheckoutCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="checkout-container">
      <button
        className={`checkout ${isOpen ? "open" : ""}`}
        onClick={isOpen ? handleClose : handleToggle}
      >
        Checkout <img src={expandicon} alt="" />
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <CheckItems />
      </div>
    </div>
  );
}

export default CheckoutCard;
