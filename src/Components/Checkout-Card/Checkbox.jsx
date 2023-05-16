import { useState } from "react";
import { items } from "./utils/item";
import "./Checkout.css";
import expandicon from "./assets/expand_more.svg";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function CheckItems() {
  const [total, setTotal] = useState(0);

  return (
    <div className="checkout-box">
        <div className="checkout-box-header">
        <h3>Select Items</h3>
        <img src={expandicon} alt="" />
        </div>
        <ul className="toppings-list">
            {items.map(({ name, price }, index) => {
            return (
                <li key={index}>
                <div className="toppings-list-item">
                    <div className="left-section">
                    <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                    <div className="right-section">{getFormattedPrice(price)}</div>
                </div>
                </li>
            );
            })}
            <li>
            <div className="toppings-list-item">
                <div className="left-section">Total:</div>
                <div className="right-section">{getFormattedPrice(total)}</div>
            </div>
            </li>
        </ul>
    </div>
  );
}

export default CheckItems;