import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Rechercher un artisan..."
        className="search-input"
      />
      <button className="search-button">Rechercher</button>
    </div>
  );
};

export default SearchBar;
