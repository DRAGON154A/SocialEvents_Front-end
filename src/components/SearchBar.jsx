import React from 'react';
import "./styles/SearchBar.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faSearch } from '@fortawesome/free-solid-svg-icons';
// *Font Awesome* est une bibliothèque d'icônes vectorielles.Elle permet d'ajouter facilement des icônes. 
//on l'utilise soit ainsi <FontAwesomeIcon icon={faSearch} /> et ici on a besoin dimporter la bibliotheque, soit ainsi <i class="fas fa-search"></i> pas besoin necessairement d'un import;
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">
        <i className='fas fa-search'></i>
      </button>
    </div>
  );
};

export default SearchBar;