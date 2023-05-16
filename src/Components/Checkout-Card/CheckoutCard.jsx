import { useState } from "react";
import "./Checkout.css"
import expandicon from "./assets/expand_less.svg"

function CheckoutCard(){
    const [isOpen, setIsOpen] = useState(true); // Add state to track menu visibility

    const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle menu visibility when the hamburger icon is clicked
    };

    const handleClose = () => {
        setIsOpen(false); // Close menu when it's already open and the hamburger icon is clicked again
    }
    return(

        <div className="checkout-container">
            <button className={`checkout ${isOpen ? "open" : ""}`} onClick={isOpen ? handleClose : handleToggle}> Checkout <img src={expandicon} alt="" /></button>
            <div className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <input type="checkbox" name="Red Tee" id="" />
                    <input type="checkbox" name="Blue Tee" id="" />
                </ul>

            </div>
        </div>

    )
}

export default CheckoutCard;