import React, { useState } from "react";
import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <form className="container">
      <input
        onChange={handleSearch}
        value={search}
        className="container__input"
        type="text"
        placeholder="Buscar..."
      />

      <AiOutlineSearch color="white" fontSize={16} />
    </form>
  );
}

export default Search;
