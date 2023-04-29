import React, { useState } from "react";
import "./HamburgerNav.css";

function HamburgerNavigator() {
  const [isOpen, setIsOpen] = useState(false); // Add state to track menu visibility

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle menu visibility when the hamburger icon is clicked
  };
  
  const handleClose = () => {
    setIsOpen(false); // Close menu when it's already open and the hamburger icon is clicked again
  }

  return (
    <div className="hamburger-container">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={isOpen ? handleClose : handleToggle}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Carts</li>
          <li>Discounts</li>
          <li>Newletters</li>
          <li>Career</li>
          <li>Ukarine</li>
          
        </ul>
      </div>
    </div>
  );
}

export default HamburgerNavigator;

