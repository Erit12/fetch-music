/*



const  SearchBar = ( {valorInput, onTyping, onSearch} ) =>{

  return (
    <div className="search-bar">
      <form name="searchForm" className="search-form">
        <input className="modern-input" type="text" value={valorInput} name="artistSearch" placeholder="Indica el Artista" onChange={(e) => onTyping(e)} ></input>
        <button className="gradient-button" onClick={ (e) => onSearch(e) }>Buscar</button>

      </form>
    </div>
  )
}

export default SearchBar;

*/
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------


import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ setSearchTerm }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busca un artista..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;