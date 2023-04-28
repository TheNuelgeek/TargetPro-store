import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false); // Add state to track search bar visibility

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle search bar visibility when the search icon is clicked
  };

  const handleSearch = (event) => {
    // Add search functionality here
    console.log(event.target.value);
  };

  return (
    <div className={`search-container ${isExpanded ? "expanded" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={handleSearch}
        onFocus={handleToggle}
        onBlur={handleToggle}
      />
      <div className={`search-icon ${isExpanded ? "expanded" : ""}`} onClick={handleToggle}>
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default SearchBar;
